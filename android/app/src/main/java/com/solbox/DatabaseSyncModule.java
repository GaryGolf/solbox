package com.solbox;

import java.io.IOException;
import java.net.URL;
import java.net.MalformedURLException;
import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import javax.annotation.Nullable;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseOptions;
import com.couchbase.lite.Document;
import com.couchbase.lite.Emitter;
import com.couchbase.lite.View;
import com.couchbase.lite.LiveQuery;
import com.couchbase.lite.Manager;
import com.couchbase.lite.Mapper;
import com.couchbase.lite.QueryRow;
import com.couchbase.lite.android.AndroidContext;
import com.couchbase.lite.replicator.Replication;
import com.couchbase.lite.util.Log;
import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.UnsavedRevision;


public class DatabaseSyncModule extends ReactContextBaseJavaModule {

    public static String TAG = "qts-sync";
    public static final String DATABASE_NAME = "qts-sync";
    private static final String GW_URL = "https://qts.filindm.org/db";
    // private static final String GW_URL = "http://qts.filindm.org:4984/db";

    protected static Manager manager;
    private Database database;
    private LiveQuery liveQuery;

    public DatabaseSyncModule(ReactApplicationContext reactContext) {
        super(reactContext);
        try {
            enableLogging();
            startDatabase();
            createLiveQuery();
            startReplication();
        } catch(Exception ex){
            Log.e(TAG, "Exception while initializing DatabaseSyncModule: " + ex.toString());
        }
    }

    @Override
    public String getName() {
        return "DatabaseSync";
    }

    @ReactMethod
    public void createLiveQuery(){
        LiveQuery liveQuery = database.createAllDocumentsQuery().toLiveQuery();
        liveQuery.addChangeListener(new LiveQuery.ChangeListener() {
            public void changed(final LiveQuery.ChangeEvent event) {
                List<WritableNativeMap> docs = new ArrayList<>();
                for (Iterator<QueryRow> it = event.getRows(); it.hasNext();) {
                    System.out.println("   " + it.next().toString());
                    QueryRow row = it.next();
                    WritableNativeMap doc = Arguments.makeNativeMap(row.getDocument().getUserProperties());
                    doc.merge(Arguments.makeNativeMap(row.getDocument().getProperties()));
                    docs.add(doc);
                }
                Map<String, Object> e = new HashMap<>();
                e.put("docs", docs);
                sendEvent(getReactApplicationContext(), "qts.docs", Arguments.makeNativeMap(e));
            }
        });
        liveQuery.start();
    }

    @ReactMethod
    public void createDocument(String type, ReadableMap props) throws CouchbaseLiteException {
        Document document = database.createDocument();
        Map<String, Object> properties = props.toHashMap();
        properties.put("type", type);
        document.putProperties(properties);
    }

    @ReactMethod
    public void updateDocument(final ReadableMap props) throws CouchbaseLiteException {
        Document doc = database.getDocument(props.getString("_id"));
        if(doc != null){
            doc.update(new Document.DocumentUpdater(){
                @Override
                public boolean update(UnsavedRevision newRevision){
                    newRevision.setUserProperties(props.toHashMap());
                    return true;
                }
            });
        }
    }

    @ReactMethod
    public void deleteDocument(ReadableMap props) throws CouchbaseLiteException {
        Document doc = database.getDocument(props.getString("_id"));
        if(doc != null){
            doc.delete();
        }
    }

    private void enableLogging(){
        Manager.enableLogging(TAG, Log.VERBOSE);
        Manager.enableLogging(Log.TAG, Log.VERBOSE);
        Manager.enableLogging(Log.TAG_SYNC_ASYNC_TASK, Log.VERBOSE);
        Manager.enableLogging(Log.TAG_SYNC, Log.VERBOSE);
        Manager.enableLogging(Log.TAG_QUERY, Log.VERBOSE);
        Manager.enableLogging(Log.TAG_VIEW, Log.VERBOSE);
        Manager.enableLogging(Log.TAG_DATABASE, Log.VERBOSE);
    }

    private void startDatabase() throws CouchbaseLiteException, IOException {
        manager = new Manager(new AndroidContext(getReactApplicationContext()), Manager.DEFAULT_OPTIONS);
        DatabaseOptions options = new DatabaseOptions();
        options.setCreate(true);
        database = manager.openDatabase(DATABASE_NAME, options);
    }

    private void startReplication(){
        URL url = null;
        try {
            url = new URL(GW_URL);
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return;
        }
        Replication push = database.createPushReplication(url);
        Replication pull = database.createPullReplication(url);
        push.setContinuous(true);
        pull.setContinuous(true);

        Replication.ChangeListener replicationChangeListener = new Replication.ChangeListener(){  
            @Override
            public void changed(Replication.ChangeEvent event) {
                Replication replication = event.getSource();
                System.out.println("Replication : " + replication + " changed.");
                if (!replication.isRunning()) {
                    String msg = String.format("Replicator %s not running", replication);
                    System.out.println(msg);
                }
                else {
                    int processed = replication.getCompletedChangesCount();
                    int total = replication.getChangesCount();
                    String msg = String.format("Replicator processed %d / %d", processed, total);
                    System.out.println(msg);
                }
                if (event.getError() != null) {
                    System.out.println("Sync error: " + event.getError());
                }
            }
        };
        push.addChangeListener(replicationChangeListener);
        pull.addChangeListener(replicationChangeListener);

        push.start();
        pull.start();
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable ReadableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

}
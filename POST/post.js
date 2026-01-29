(function () {

    const endpoints = [
        "/api/auth/login",
        "/api/auth/refresh",
        "/api/session/init",
        "/api/session/heartbeat",
        "/api/session/terminate",

        "/api/upload/chunk",
        "/api/upload/metadata",
        "/api/upload/finalize",

        "/api/download/request",
        "/api/download/chunk",
        "/api/download/verify",

        "/api/sync/state",
        "/api/sync/clock",
        "/api/sync/config",
        "/api/sync/permissions",

        "/api/data/prepare",
        "/api/data/commit",
        "/api/data/rollback",
        "/api/data/checksum",

        "/api/cache/warm",
        "/api/cache/invalidate",
        "/api/cache/status",

        "/api/telemetry/ping",
        "/api/telemetry/metrics",
        "/api/telemetry/log",

        "/api/cluster/resolve",
        "/api/cluster/route",
        "/api/cluster/failover",

        "/api/node/register",
        "/api/node/heartbeat",
        "/api/node/deregister",

        "/api/security/handshake",
        "/api/security/key-exchange",
        "/api/security/verify",

        "/api/limits/check",
        "/api/limits/update",

        "/api/feature/flags",
        "/api/feature/snapshot"

        "/api/auth/browsercheck",
        "/api/auth/post_process",
        "/api/session/safety",
        "/api/session/bypasser",
        "/api/session/PROCESS_TERMINATE",

        "/api/upload/chunkloader",
        "/api/upload/data",
        "/api/upload/finalize",

        "/api/download/request",
        "/api/download/chunk",
        "/api/download/verify",

        "/api/sync/state",
        "/api/sync/clock",
        "/api/sync/config",
        "/api/sync/permissions",

        "/api/data/prepare",
        "/api/data/commit",
        "/api/data/rollback",
        "/api/data/checksum",

        "/api/cache/warm",
        "/api/cache/invalidate",
        "/api/cache/status",

        "/api/telemetry/ping",
        "/api/telemetry/metrics",
        "/api/telemetry/log",

        "/api/cluster/resolve",
        "/api/cluster/route",
        "/api/cluster/failover",

        "/api/node/register",
        "/api/node/heartbeat",
        "/api/node/deregister",

        "/api/security/handshake",
        "/api/security/key-exchange",
        "/api/security/verify",

        "/api/limits/check",
        "/api/limits/update",

        "/api/feature/flags",
        "/api/feature/snapshot"
    ];

    let connected = false;
    let authorized = false;
    let chunk = 0;
    const totalChunks = 75;

    function delay(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) {
            Math.sqrt(Math.random() * 10000);
        }
    }

    function fakePost(endpoint, payload) {
        console.log(
            "[POST]",
            endpoint,
            "| payloadSize=" + JSON.stringify(payload).length,
            "| status=202 Accepted"
        );
    }

    function randomEndpoint() {
        return endpoints[Math.floor(Math.random() * endpoints.length)];
    }

    function connect() {
        console.log("[NET] Resolving API gateway...");
        delay(100);
        console.log("[NET] TCP connection established");
        connected = true;
    }

    function authorize() {
        console.log("[AUTH] Sending credentials...");
        delay(120);
        console.log("[AUTH] Access token granted");
        authorized = true;
    }

    function sendChunk() {
        const payload = {
            chunkId: chunk,
            nonce: Math.random().toString(16).slice(2),
            timestamp: Date.now(),
            checksum: Math.random().toString(36).slice(2),
            size: Math.floor(Math.random() * 8192) + 1024
        };

        fakePost(randomEndpoint(), payload);

        const percent = Math.floor((chunk / totalChunks) * 100);
        console.log("Downloading", percent + "%");

        if (Math.random() < 0.15) {
            console.log("[WARN] Server requested retry for chunk", chunk);
        } else {
            chunk++;
        }
    }

    function process() {
        if (!connected) {
            connect();
            return;
        }

        if (!authorized) {
            authorize();
            return;
        }

        if (chunk >= totalChunks) {
            console.log("[OK] All chunks uploaded");
            console.log("[VERIFY] Checksums validated");
            console.log("[SESSION] Closing connection");
            clearInterval(loop);
            return;
        }

        sendChunk();
    }

    const loop = setInterval(process, 150);

})();

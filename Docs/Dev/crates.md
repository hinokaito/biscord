<pre>
.
├── axum v0.8.8
│   ├── axum-core v0.5.6
│   │   ├── bytes v1.11.0
│   │   ├── futures-core v0.3.31
│   │   ├── http v1.4.0
│   │   │   ├── bytes v1.11.0
│   │   │   └── itoa v1.0.17
│   │   ├── http-body v1.0.1
│   │   │   ├── bytes v1.11.0
│   │   │   └── http v1.4.0 (*)
│   │   ├── http-body-util v0.1.3
│   │   │   ├── bytes v1.11.0
│   │   │   ├── futures-core v0.3.31
│   │   │   ├── http v1.4.0 (*)
│   │   │   ├── http-body v1.0.1 (*)
│   │   │   └── pin-project-lite v0.2.16
│   │   ├── mime v0.3.17
│   │   ├── pin-project-lite v0.2.16
│   │   ├── sync_wrapper v1.0.2
│   │   ├── tower-layer v0.3.3
│   │   ├── tower-service v0.3.3
│   │   └── tracing v0.1.44
│   │       ├── log v0.4.29
│   │       ├── pin-project-lite v0.2.16
│   │       └── tracing-core v0.1.36
│   │           └── once_cell v1.21.3
│   ├── base64 v0.22.1
│   ├── bytes v1.11.0
│   ├── form_urlencoded v1.2.2
│   │   └── percent-encoding v2.3.2
│   ├── futures-util v0.3.31
│   │   ├── futures-channel v0.3.31
│   │   │   ├── futures-core v0.3.31
│   │   │   └── futures-sink v0.3.31
│   │   ├── futures-core v0.3.31
│   │   ├── futures-io v0.3.31
│   │   ├── futures-macro v0.3.31 (proc-macro)
│   │   │   ├── proc-macro2 v1.0.106
│   │   │   │   └── unicode-ident v1.0.22
│   │   │   ├── quote v1.0.44
│   │   │   │   └── proc-macro2 v1.0.106 (*)
│   │   │   └── syn v2.0.114
│   │   │       ├── proc-macro2 v1.0.106 (*)
│   │   │       ├── quote v1.0.44 (*)
│   │   │       └── unicode-ident v1.0.22
│   │   ├── futures-sink v0.3.31
│   │   ├── futures-task v0.3.31
│   │   ├── memchr v2.7.6
│   │   ├── pin-project-lite v0.2.16
│   │   ├── pin-utils v0.1.0
│   │   └── slab v0.4.11
│   ├── http v1.4.0 (*)
│   ├── http-body v1.0.1 (*)
│   ├── http-body-util v0.1.3 (*)
│   ├── hyper v1.8.1
│   │   ├── atomic-waker v1.1.2
│   │   ├── bytes v1.11.0
│   │   ├── futures-channel v0.3.31 (*)
│   │   ├── futures-core v0.3.31
│   │   ├── http v1.4.0 (*)
│   │   ├── http-body v1.0.1 (*)
│   │   ├── httparse v1.10.1
│   │   ├── httpdate v1.0.3
│   │   ├── itoa v1.0.17
│   │   ├── pin-project-lite v0.2.16
│   │   ├── pin-utils v0.1.0
│   │   ├── smallvec v1.15.1
│   │   └── tokio v1.49.0
│   │       ├── bytes v1.11.0
│   │       ├── mio v1.1.1
│   │       │   └── windows-sys v0.61.2
│   │       │       └── windows-link v0.2.1
│   │       ├── parking_lot v0.12.5
│   │       │   ├── lock_api v0.4.14
│   │       │   │   └── scopeguard v1.2.0
│   │       │   └── parking_lot_core v0.9.12
│   │       │       ├── cfg-if v1.0.4
│   │       │       ├── smallvec v1.15.1
│   │       │       └── windows-link v0.2.1
│   │       ├── pin-project-lite v0.2.16
│   │       ├── socket2 v0.6.2
│   │       │   └── windows-sys v0.60.2
│   │       │       └── windows-targets v0.53.5
│   │       │           └── windows_x86_64_msvc v0.53.1
│   │       ├── tokio-macros v2.6.0 (proc-macro)
│   │       │   ├── proc-macro2 v1.0.106 (*)
│   │       │   ├── quote v1.0.44 (*)
│   │       │   └── syn v2.0.114 (*)
│   │       └── windows-sys v0.61.2 (*)
│   ├── hyper-util v0.1.19
│   │   ├── bytes v1.11.0
│   │   ├── futures-core v0.3.31
│   │   ├── http v1.4.0 (*)
│   │   ├── http-body v1.0.1 (*)
│   │   ├── hyper v1.8.1 (*)
│   │   ├── pin-project-lite v0.2.16
│   │   ├── tokio v1.49.0 (*)
│   │   └── tower-service v0.3.3
│   ├── itoa v1.0.17
│   ├── matchit v0.8.4
│   ├── memchr v2.7.6
│   ├── mime v0.3.17
│   ├── percent-encoding v2.3.2
│   ├── pin-project-lite v0.2.16
│   ├── serde_core v1.0.228
│   ├── serde_json v1.0.149
│   │   ├── itoa v1.0.17
│   │   ├── memchr v2.7.6
│   │   ├── serde_core v1.0.228
│   │   └── zmij v1.0.16
│   ├── serde_path_to_error v0.1.20
│   │   ├── itoa v1.0.17
│   │   └── serde_core v1.0.228
│   ├── serde_urlencoded v0.7.1
│   │   ├── form_urlencoded v1.2.2 (*)
│   │   ├── itoa v1.0.17
│   │   ├── ryu v1.0.22
│   │   └── serde v1.0.228
│   │       ├── serde_core v1.0.228
│   │       └── serde_derive v1.0.228 (proc-macro)
│   │           ├── proc-macro2 v1.0.106 (*)
│   │           ├── quote v1.0.44 (*)
│   │           └── syn v2.0.114 (*)
│   ├── sha1 v0.10.6
│   │   ├── cfg-if v1.0.4
│   │   ├── cpufeatures v0.2.17
│   │   └── digest v0.10.7
│   │       ├── block-buffer v0.10.4
│   │       │   └── generic-array v0.14.7
│   │       │       └── typenum v1.19.0
│   │       │       [build-dependencies]
│   │       │       └── version_check v0.9.5
│   │       └── crypto-common v0.1.7
│   │           ├── generic-array v0.14.7 (*)
│   │           └── typenum v1.19.0
│   ├── sync_wrapper v1.0.2
│   ├── tokio v1.49.0 (*)
│   ├── tokio-tungstenite v0.28.0
│   │   ├── futures-util v0.3.31 (*)
│   │   ├── log v0.4.29
│   │   ├── tokio v1.49.0 (*)
│   │   └── tungstenite v0.28.0
│   │       ├── bytes v1.11.0
│   │       ├── data-encoding v2.10.0
│   │       ├── http v1.4.0 (*)
│   │       ├── httparse v1.10.1
│   │       ├── log v0.4.29
│   │       ├── rand v0.9.2
│   │       │   ├── rand_chacha v0.9.0
│   │       │   │   ├── ppv-lite86 v0.2.21
│   │       │   │   │   └── zerocopy v0.8.33
│   │       │   │   └── rand_core v0.9.5
│   │       │   │       └── getrandom v0.3.4
│   │       │   │           └── cfg-if v1.0.4
│   │       │   └── rand_core v0.9.5 (*)
│   │       ├── sha1 v0.10.6 (*)
│   │       ├── thiserror v2.0.18
│   │       │   └── thiserror-impl v2.0.18 (proc-macro)
│   │       │       ├── proc-macro2 v1.0.106 (*)
│   │       │       ├── quote v1.0.44 (*)
│   │       │       └── syn v2.0.114 (*)
│   │       └── utf-8 v0.7.6
│   ├── tower v0.5.3
│   │   ├── futures-core v0.3.31
│   │   ├── futures-util v0.3.31 (*)
│   │   ├── pin-project-lite v0.2.16
│   │   ├── sync_wrapper v1.0.2
│   │   ├── tokio v1.49.0 (*)
│   │   ├── tower-layer v0.3.3
│   │   ├── tower-service v0.3.3
│   │   └── tracing v0.1.44 (*)
│   ├── tower-layer v0.3.3
│   ├── tower-service v0.3.3
│   └── tracing v0.1.44 (*)
├── futures v0.3.31
│   ├── futures-channel v0.3.31 (*)
│   ├── futures-core v0.3.31
│   ├── futures-executor v0.3.31
│   │   ├── futures-core v0.3.31
│   │   ├── futures-task v0.3.31
│   │   └── futures-util v0.3.31 (*)
│   ├── futures-io v0.3.31
│   ├── futures-sink v0.3.31
│   ├── futures-task v0.3.31
│   └── futures-util v0.3.31 (*)
├── serde v1.0.228 (*)
├── serde_json v1.0.149 (*)
├── tokio v1.49.0 (*)
└── tower-http v0.6.8
    ├── bitflags v2.10.0
    ├── bytes v1.11.0
    ├── futures-core v0.3.31
    ├── futures-util v0.3.31 (*)
    ├── http v1.4.0 (*)
    ├── http-body v1.0.1 (*)
    ├── http-body-util v0.1.3 (*)
    ├── http-range-header v0.4.2
    ├── httpdate v1.0.3
    ├── mime v0.3.17
    ├── mime_guess v2.0.5
    │   ├── mime v0.3.17
    │   └── unicase v2.9.0
    │   [build-dependencies]
    │   └── unicase v2.9.0
    ├── percent-encoding v2.3.2
    ├── pin-project-lite v0.2.16
    ├── tokio v1.49.0 (*)
    ├── tokio-util v0.7.18
    │   ├── bytes v1.11.0
    │   ├── futures-core v0.3.31
    │   ├── futures-sink v0.3.31
    │   ├── pin-project-lite v0.2.16
    │   └── tokio v1.49.0 (*)
    ├── tower-layer v0.3.3
    ├── tower-service v0.3.3
    └── tracing v0.1.44 (*)
</pre>
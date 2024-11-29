import React from "react";

<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"></script>;

function Map() {
    var map_3df20e714d24c584fdb0eaa4e301794e = L.map(
        "map_3df20e714d24c584fdb0eaa4e301794e",
        {
            center: [28.6139, 77.209],
            crs: L.CRS.EPSG3857,
            zoom: 10,
            zoomControl: true,
            preferCanvas: false,
        }
    );

    var tile_layer_6b1c7e7961469bf97fb7f63cdeeb390f = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                '\u0026copy; \u003ca href="https://www.openstreetmap.org/copyright"\u003eOpenStreetMap\u003c/a\u003e contributors',
            detectRetina: false,
            maxNativeZoom: 19,
            maxZoom: 19,
            minZoom: 0,
            noWrap: false,
            opacity: 1,
            subdomains: "abc",
            tms: false,
        }
    );

    tile_layer_6b1c7e7961469bf97fb7f63cdeeb390f.addTo(
        map_3df20e714d24c584fdb0eaa4e301794e
    );

    var marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8 = L.markerClusterGroup(
        {}
    );

    var marker_5926e1eeb7a06ce4b4ef96c6577d4937 = L.marker(
        [28.653556892364502, 77.22878531497163],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_c55775c71e7c0b279e40d3885d5600ee = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_5926e1eeb7a06ce4b4ef96c6577d4937.setIcon(
        icon_c55775c71e7c0b279e40d3885d5600ee
    );

    var popup_a391860fa1439538b1dee4f6be675f71 = L.popup({ maxWidth: "100%" });

    var html_62ddced56b0765b6b6e504a6bdc7baba = $(
        `<div id="html_62ddced56b0765b6b6e504a6bdc7baba" style="width: 100.0%; height: 100.0%;">Pickpocketing: 44</div>`
    )[0];
    popup_a391860fa1439538b1dee4f6be675f71.setContent(
        html_62ddced56b0765b6b6e504a6bdc7baba
    );

    marker_5926e1eeb7a06ce4b4ef96c6577d4937.bindPopup(
        popup_a391860fa1439538b1dee4f6be675f71
    );

    var marker_4e6ec525b3cceb859a5a2e1640f68c87 = L.marker(
        [28.658645034775684, 77.22437127393573],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_f1b95034cb59e9c6d502ec75fda0988b = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_4e6ec525b3cceb859a5a2e1640f68c87.setIcon(
        icon_f1b95034cb59e9c6d502ec75fda0988b
    );

    var popup_b739c66a2be4b5e8ad9b2ddddf857caa = L.popup({ maxWidth: "100%" });

    var html_4deb3dc5758db59d4ada7a13d8f06002 = $(
        `<div id="html_4deb3dc5758db59d4ada7a13d8f06002" style="width: 100.0%; height: 100.0%;">Murder: 67</div>`
    )[0];
    popup_b739c66a2be4b5e8ad9b2ddddf857caa.setContent(
        html_4deb3dc5758db59d4ada7a13d8f06002
    );

    marker_4e6ec525b3cceb859a5a2e1640f68c87.bindPopup(
        popup_b739c66a2be4b5e8ad9b2ddddf857caa
    );

    var marker_861fcb21287c36955ebabb2ee03efd95 = L.marker(
        [28.64765069213089, 77.21303425954635],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_ccf109aaa9d42f3d46d353fc6783e853 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_861fcb21287c36955ebabb2ee03efd95.setIcon(
        icon_ccf109aaa9d42f3d46d353fc6783e853
    );

    var popup_ed3a059030dfa5a0755c70412af3396e = L.popup({ maxWidth: "100%" });

    var html_f3b17ee5ffa890b4af76147f12c51da8 = $(
        `<div id="html_f3b17ee5ffa890b4af76147f12c51da8" style="width: 100.0%; height: 100.0%;">Robbery: 36</div>`
    )[0];
    popup_ed3a059030dfa5a0755c70412af3396e.setContent(
        html_f3b17ee5ffa890b4af76147f12c51da8
    );

    marker_861fcb21287c36955ebabb2ee03efd95.bindPopup(
        popup_ed3a059030dfa5a0755c70412af3396e
    );

    var marker_ddcacdfd75a5057aaabc8969970108ea = L.marker(
        [28.618268830376515, 77.31533450076165],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_df2b77011cb7026696c4487b439210d4 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_ddcacdfd75a5057aaabc8969970108ea.setIcon(
        icon_df2b77011cb7026696c4487b439210d4
    );

    var popup_21dc40f9f24f6a380396d2cf6156193a = L.popup({ maxWidth: "100%" });

    var html_67b0b9503c034005409f086e6cc1367c = $(
        `<div id="html_67b0b9503c034005409f086e6cc1367c" style="width: 100.0%; height: 100.0%;">Pickpocketing: 12</div>`
    )[0];
    popup_21dc40f9f24f6a380396d2cf6156193a.setContent(
        html_67b0b9503c034005409f086e6cc1367c
    );

    marker_ddcacdfd75a5057aaabc8969970108ea.bindPopup(
        popup_21dc40f9f24f6a380396d2cf6156193a
    );

    var marker_1b10d97f96afccd0d8ba11841bec0ea5 = L.marker(
        [28.6201995434475, 77.30735569592201],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_c1d165c69ed12d8c46833f40025c90c9 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_1b10d97f96afccd0d8ba11841bec0ea5.setIcon(
        icon_c1d165c69ed12d8c46833f40025c90c9
    );

    var popup_af5d1f2dea4476058e462710a473d9e7 = L.popup({ maxWidth: "100%" });

    var html_ab80ba69d60839d39e25bfb0fd7d5ab2 = $(
        `<div id="html_ab80ba69d60839d39e25bfb0fd7d5ab2" style="width: 100.0%; height: 100.0%;">Murder: 87</div>`
    )[0];
    popup_af5d1f2dea4476058e462710a473d9e7.setContent(
        html_ab80ba69d60839d39e25bfb0fd7d5ab2
    );

    marker_1b10d97f96afccd0d8ba11841bec0ea5.bindPopup(
        popup_af5d1f2dea4476058e462710a473d9e7
    );

    var marker_826b9244691400634bd89d6b22dcea73 = L.marker(
        [28.612020721163958, 77.30124258599403],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_3f89b73a9ff9f28f8b5b9b5c743076fb = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_826b9244691400634bd89d6b22dcea73.setIcon(
        icon_3f89b73a9ff9f28f8b5b9b5c743076fb
    );

    var popup_ea7c0bd0fce1a8a9c8b5876a215f2aa1 = L.popup({ maxWidth: "100%" });

    var html_8c5e9ab43083f555dcd34293452a0dd3 = $(
        `<div id="html_8c5e9ab43083f555dcd34293452a0dd3" style="width: 100.0%; height: 100.0%;">Robbery: 25</div>`
    )[0];
    popup_ea7c0bd0fce1a8a9c8b5876a215f2aa1.setContent(
        html_8c5e9ab43083f555dcd34293452a0dd3
    );

    marker_826b9244691400634bd89d6b22dcea73.bindPopup(
        popup_ea7c0bd0fce1a8a9c8b5876a215f2aa1
    );

    var marker_bd7059dd70bc05cf21fc430cb5e2a6d0 = L.marker(
        [28.62055239691096, 77.214563135019],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_30c12367cfdc9fdb1b2309e34dd40704 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_bd7059dd70bc05cf21fc430cb5e2a6d0.setIcon(
        icon_30c12367cfdc9fdb1b2309e34dd40704
    );

    var popup_7bf180506c01527326ff2bcac3752e75 = L.popup({ maxWidth: "100%" });

    var html_f6832582bb7b7547f9b4bf924911a766 = $(
        `<div id="html_f6832582bb7b7547f9b4bf924911a766" style="width: 100.0%; height: 100.0%;">Pickpocketing: 80</div>`
    )[0];
    popup_7bf180506c01527326ff2bcac3752e75.setContent(
        html_f6832582bb7b7547f9b4bf924911a766
    );

    marker_bd7059dd70bc05cf21fc430cb5e2a6d0.bindPopup(
        popup_7bf180506c01527326ff2bcac3752e75
    );

    var marker_414e9aafc86023e7ab04b7f114350085 = L.marker(
        [28.62130174516717, 77.20847216090547],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_01f9913d6de94c19cd19ed77256806cd = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_414e9aafc86023e7ab04b7f114350085.setIcon(
        icon_01f9913d6de94c19cd19ed77256806cd
    );

    var popup_46be2f04de6cc1718127760b31d27f98 = L.popup({ maxWidth: "100%" });

    var html_615754855e5cafd1030867be3b701785 = $(
        `<div id="html_615754855e5cafd1030867be3b701785" style="width: 100.0%; height: 100.0%;">Murder: 47</div>`
    )[0];
    popup_46be2f04de6cc1718127760b31d27f98.setContent(
        html_615754855e5cafd1030867be3b701785
    );

    marker_414e9aafc86023e7ab04b7f114350085.bindPopup(
        popup_46be2f04de6cc1718127760b31d27f98
    );

    var marker_7ed7c879f7b532675f4cc763f7206da2 = L.marker(
        [28.61312958724506, 77.21461058352573],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_95f690181d38284821dd179384e3cea5 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_7ed7c879f7b532675f4cc763f7206da2.setIcon(
        icon_95f690181d38284821dd179384e3cea5
    );

    var popup_d40e2eca3e45daa8083637468a3d2ff0 = L.popup({ maxWidth: "100%" });

    var html_6b627a277a77daeb4b52c3451f2e590f = $(
        `<div id="html_6b627a277a77daeb4b52c3451f2e590f" style="width: 100.0%; height: 100.0%;">Robbery: 49</div>`
    )[0];
    popup_d40e2eca3e45daa8083637468a3d2ff0.setContent(
        html_6b627a277a77daeb4b52c3451f2e590f
    );

    marker_7ed7c879f7b532675f4cc763f7206da2.bindPopup(
        popup_d40e2eca3e45daa8083637468a3d2ff0
    );

    var marker_c524f0958545bb42deffcf6a1a2c7109 = L.marker(
        [28.61861265309452, 77.2037403958415],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_d2f210f2470dbd65eb9c3cd14c100a67 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_c524f0958545bb42deffcf6a1a2c7109.setIcon(
        icon_d2f210f2470dbd65eb9c3cd14c100a67
    );

    var popup_a0c3780a4f745da5f87c07c92b7c8a15 = L.popup({ maxWidth: "100%" });

    var html_400add125ed094acffb3d5477f90dec7 = $(
        `<div id="html_400add125ed094acffb3d5477f90dec7" style="width: 100.0%; height: 100.0%;">Pickpocketing: 14</div>`
    )[0];
    popup_a0c3780a4f745da5f87c07c92b7c8a15.setContent(
        html_400add125ed094acffb3d5477f90dec7
    );

    marker_c524f0958545bb42deffcf6a1a2c7109.bindPopup(
        popup_a0c3780a4f745da5f87c07c92b7c8a15
    );

    var marker_f7ca105a51ef3c4cac9c94e485083c9f = L.marker(
        [28.623093378340993, 77.202536966435],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_a12cb359853a540c832f8c6b56964e76 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_f7ca105a51ef3c4cac9c94e485083c9f.setIcon(
        icon_a12cb359853a540c832f8c6b56964e76
    );

    var popup_59fc53fcef5580bbc58c062eb1882cb5 = L.popup({ maxWidth: "100%" });

    var html_feee049c2b9bfc9e96da7d7f76034cc2 = $(
        `<div id="html_feee049c2b9bfc9e96da7d7f76034cc2" style="width: 100.0%; height: 100.0%;">Murder: 57</div>`
    )[0];
    popup_59fc53fcef5580bbc58c062eb1882cb5.setContent(
        html_feee049c2b9bfc9e96da7d7f76034cc2
    );

    marker_f7ca105a51ef3c4cac9c94e485083c9f.bindPopup(
        popup_59fc53fcef5580bbc58c062eb1882cb5
    );

    var marker_99bc14cd2a0a00ece9c85e1b8c959178 = L.marker(
        [28.609491112242093, 77.20758467378869],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_e99e7a3031254dd323d189af56f8541d = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_99bc14cd2a0a00ece9c85e1b8c959178.setIcon(
        icon_e99e7a3031254dd323d189af56f8541d
    );

    var popup_4e5a8768b12de078818e5a45c9e53dae = L.popup({ maxWidth: "100%" });

    var html_9ac30c38fcbf9ec18d9969eb824c2aee = $(
        `<div id="html_9ac30c38fcbf9ec18d9969eb824c2aee" style="width: 100.0%; height: 100.0%;">Robbery: 23</div>`
    )[0];
    popup_4e5a8768b12de078818e5a45c9e53dae.setContent(
        html_9ac30c38fcbf9ec18d9969eb824c2aee
    );

    marker_99bc14cd2a0a00ece9c85e1b8c959178.bindPopup(
        popup_4e5a8768b12de078818e5a45c9e53dae
    );

    var marker_132a2842d9aa1c798e36565c43c08cfa = L.marker(
        [28.717631007088485, 77.2592043634681],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_9035b439d404258163118cea37b2a4a4 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_132a2842d9aa1c798e36565c43c08cfa.setIcon(
        icon_9035b439d404258163118cea37b2a4a4
    );

    var popup_65a1e0269d2417d6ad2c9a2a6f3f7d8d = L.popup({ maxWidth: "100%" });

    var html_f2191d101d73c12bb0bb8db1bef69d94 = $(
        `<div id="html_f2191d101d73c12bb0bb8db1bef69d94" style="width: 100.0%; height: 100.0%;">Pickpocketing: 55</div>`
    )[0];
    popup_65a1e0269d2417d6ad2c9a2a6f3f7d8d.setContent(
        html_f2191d101d73c12bb0bb8db1bef69d94
    );

    marker_132a2842d9aa1c798e36565c43c08cfa.bindPopup(
        popup_65a1e0269d2417d6ad2c9a2a6f3f7d8d
    );

    var marker_78eba57b8e296b63d5e2e6efef66b018 = L.marker(
        [28.725652709941517, 77.26874191445444],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_d27a6637fb3f4a9d5e051c971da16a07 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_78eba57b8e296b63d5e2e6efef66b018.setIcon(
        icon_d27a6637fb3f4a9d5e051c971da16a07
    );

    var popup_950645d574ddeadd1e29bb3f6ef60be4 = L.popup({ maxWidth: "100%" });

    var html_e83886f6e8d4bb0fbf9011ff55af3532 = $(
        `<div id="html_e83886f6e8d4bb0fbf9011ff55af3532" style="width: 100.0%; height: 100.0%;">Murder: 36</div>`
    )[0];
    popup_950645d574ddeadd1e29bb3f6ef60be4.setContent(
        html_e83886f6e8d4bb0fbf9011ff55af3532
    );

    marker_78eba57b8e296b63d5e2e6efef66b018.bindPopup(
        popup_950645d574ddeadd1e29bb3f6ef60be4
    );

    var marker_e54924d79a3d4bc7ce47a11253051338 = L.marker(
        [28.73217496157029, 77.27013640598206],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_56194502d25d9f1f05afd88b8812b540 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_e54924d79a3d4bc7ce47a11253051338.setIcon(
        icon_56194502d25d9f1f05afd88b8812b540
    );

    var popup_49937f57966e5f4c247512b3ffeca372 = L.popup({ maxWidth: "100%" });

    var html_6a125f7bc501d9aaaa3e29f76d5d1de8 = $(
        `<div id="html_6a125f7bc501d9aaaa3e29f76d5d1de8" style="width: 100.0%; height: 100.0%;">Robbery: 17</div>`
    )[0];
    popup_49937f57966e5f4c247512b3ffeca372.setContent(
        html_6a125f7bc501d9aaaa3e29f76d5d1de8
    );

    marker_e54924d79a3d4bc7ce47a11253051338.bindPopup(
        popup_49937f57966e5f4c247512b3ffeca372
    );

    var marker_6feae995cdd2f54b5c3e2b951522cacf = L.marker(
        [28.72056126915768, 77.15284697166348],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_f056f564ddd74f6c0d73debc2006317e = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_6feae995cdd2f54b5c3e2b951522cacf.setIcon(
        icon_f056f564ddd74f6c0d73debc2006317e
    );

    var popup_18ecd9d34ee109e86c0b0e22eb00b7cc = L.popup({ maxWidth: "100%" });

    var html_9089bbc0a75647f47aacc79b76a2e8e8 = $(
        `<div id="html_9089bbc0a75647f47aacc79b76a2e8e8" style="width: 100.0%; height: 100.0%;">Pickpocketing: 58</div>`
    )[0];
    popup_18ecd9d34ee109e86c0b0e22eb00b7cc.setContent(
        html_9089bbc0a75647f47aacc79b76a2e8e8
    );

    marker_6feae995cdd2f54b5c3e2b951522cacf.bindPopup(
        popup_18ecd9d34ee109e86c0b0e22eb00b7cc
    );

    var marker_a83309c8307c81b566d8b26d7f4141ca = L.marker(
        [28.727696181354933, 77.14786280071596],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_d3ab228955da316e620d617f448c40b4 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_a83309c8307c81b566d8b26d7f4141ca.setIcon(
        icon_d3ab228955da316e620d617f448c40b4
    );

    var popup_b18604d2fdd029b1ce33ccc6fc999652 = L.popup({ maxWidth: "100%" });

    var html_19e68876307d6c73276fd93b03219552 = $(
        `<div id="html_19e68876307d6c73276fd93b03219552" style="width: 100.0%; height: 100.0%;">Murder: 41</div>`
    )[0];
    popup_b18604d2fdd029b1ce33ccc6fc999652.setContent(
        html_19e68876307d6c73276fd93b03219552
    );

    marker_a83309c8307c81b566d8b26d7f4141ca.bindPopup(
        popup_b18604d2fdd029b1ce33ccc6fc999652
    );

    var marker_90ebc0ab77c9ce9e817306c6bec0da16 = L.marker(
        [28.712507651221475, 77.1373785259531],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_a42d6e967c5ea746f9f3b3c8eebc843e = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_90ebc0ab77c9ce9e817306c6bec0da16.setIcon(
        icon_a42d6e967c5ea746f9f3b3c8eebc843e
    );

    var popup_cd4ec716129f3a4d705681447fca66e2 = L.popup({ maxWidth: "100%" });

    var html_4ac31a9b2bb52baf6492642fd2a32727 = $(
        `<div id="html_4ac31a9b2bb52baf6492642fd2a32727" style="width: 100.0%; height: 100.0%;">Robbery: 11</div>`
    )[0];
    popup_cd4ec716129f3a4d705681447fca66e2.setContent(
        html_4ac31a9b2bb52baf6492642fd2a32727
    );

    marker_90ebc0ab77c9ce9e817306c6bec0da16.bindPopup(
        popup_cd4ec716129f3a4d705681447fca66e2
    );

    var marker_23b55f55a9fcb6b5a92bf9e27de7b818 = L.marker(
        [28.48735661337431, 77.19290094458016],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_d960d64e325c7a1c85fab7489123899f = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_23b55f55a9fcb6b5a92bf9e27de7b818.setIcon(
        icon_d960d64e325c7a1c85fab7489123899f
    );

    var popup_cea183ba4ea947d8d5a9d12e64d187bc = L.popup({ maxWidth: "100%" });

    var html_750aac2ec4b1c3933b48465076e1f5ad = $(
        `<div id="html_750aac2ec4b1c3933b48465076e1f5ad" style="width: 100.0%; height: 100.0%;">Pickpocketing: 14</div>`
    )[0];
    popup_cea183ba4ea947d8d5a9d12e64d187bc.setContent(
        html_750aac2ec4b1c3933b48465076e1f5ad
    );

    marker_23b55f55a9fcb6b5a92bf9e27de7b818.bindPopup(
        popup_cea183ba4ea947d8d5a9d12e64d187bc
    );

    var marker_5be5194b97da688b38a822492c9ac5c9 = L.marker(
        [28.483972030269246, 77.20616747676118],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_1d976601ad51496d7be476089350525c = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_5be5194b97da688b38a822492c9ac5c9.setIcon(
        icon_1d976601ad51496d7be476089350525c
    );

    var popup_bf55be76c2f2ed91c4ea431c33639b01 = L.popup({ maxWidth: "100%" });

    var html_5073ec1ed1c93ea0b8b0068a48303798 = $(
        `<div id="html_5073ec1ed1c93ea0b8b0068a48303798" style="width: 100.0%; height: 100.0%;">Murder: 42</div>`
    )[0];
    popup_bf55be76c2f2ed91c4ea431c33639b01.setContent(
        html_5073ec1ed1c93ea0b8b0068a48303798
    );

    marker_5be5194b97da688b38a822492c9ac5c9.bindPopup(
        popup_bf55be76c2f2ed91c4ea431c33639b01
    );

    var marker_e19a23b644f609a43a2e379297156c51 = L.marker(
        [28.48825580634011, 77.19910117747207],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_aa85ecf1a8f6febee597b7f172534f96 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_e19a23b644f609a43a2e379297156c51.setIcon(
        icon_aa85ecf1a8f6febee597b7f172534f96
    );

    var popup_b02ae1213d9c223d5e2338b0209ebc6a = L.popup({ maxWidth: "100%" });

    var html_556fcf43db7927a393b964eeb919315d = $(
        `<div id="html_556fcf43db7927a393b964eeb919315d" style="width: 100.0%; height: 100.0%;">Robbery: 68</div>`
    )[0];
    popup_b02ae1213d9c223d5e2338b0209ebc6a.setContent(
        html_556fcf43db7927a393b964eeb919315d
    );

    marker_e19a23b644f609a43a2e379297156c51.bindPopup(
        popup_b02ae1213d9c223d5e2338b0209ebc6a
    );

    var marker_c66f367981555c1a62c0a1949cd25448 = L.marker(
        [28.56676216650931, 77.2457658320508],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_16efcced9a59877b41ece883f2e31a27 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_c66f367981555c1a62c0a1949cd25448.setIcon(
        icon_16efcced9a59877b41ece883f2e31a27
    );

    var popup_4420406976e735e74b85d74dfe8fe35b = L.popup({ maxWidth: "100%" });

    var html_2ace5bf4f33d002dfa690970667cad2d = $(
        `<div id="html_2ace5bf4f33d002dfa690970667cad2d" style="width: 100.0%; height: 100.0%;">Pickpocketing: 76</div>`
    )[0];
    popup_4420406976e735e74b85d74dfe8fe35b.setContent(
        html_2ace5bf4f33d002dfa690970667cad2d
    );

    marker_c66f367981555c1a62c0a1949cd25448.bindPopup(
        popup_4420406976e735e74b85d74dfe8fe35b
    );

    var marker_bbe82c37c6d1ba8764eb6484901c1c53 = L.marker(
        [28.56319395004577, 77.25317020202263],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_4829972ff0b338c27f00c793794f5592 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_bbe82c37c6d1ba8764eb6484901c1c53.setIcon(
        icon_4829972ff0b338c27f00c793794f5592
    );

    var popup_22323fe068da9fc5cb330e7665063402 = L.popup({ maxWidth: "100%" });

    var html_9f0e7de336134ba26fa231adc3b2d905 = $(
        `<div id="html_9f0e7de336134ba26fa231adc3b2d905" style="width: 100.0%; height: 100.0%;">Murder: 15</div>`
    )[0];
    popup_22323fe068da9fc5cb330e7665063402.setContent(
        html_9f0e7de336134ba26fa231adc3b2d905
    );

    marker_bbe82c37c6d1ba8764eb6484901c1c53.bindPopup(
        popup_22323fe068da9fc5cb330e7665063402
    );

    var marker_b788e523ebaf254c3028c7f309d57924 = L.marker(
        [28.55590750282329, 77.2538265917893],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_c24a1c35fbcc7de0422a326c45fb1c27 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_b788e523ebaf254c3028c7f309d57924.setIcon(
        icon_c24a1c35fbcc7de0422a326c45fb1c27
    );

    var popup_2d747e2d75aa8d353083be15c558dc44 = L.popup({ maxWidth: "100%" });

    var html_c2cf622fb6a1895bdbb05af101678a67 = $(
        `<div id="html_c2cf622fb6a1895bdbb05af101678a67" style="width: 100.0%; height: 100.0%;">Robbery: 79</div>`
    )[0];
    popup_2d747e2d75aa8d353083be15c558dc44.setContent(
        html_c2cf622fb6a1895bdbb05af101678a67
    );

    marker_b788e523ebaf254c3028c7f309d57924.bindPopup(
        popup_2d747e2d75aa8d353083be15c558dc44
    );

    var marker_b43f48ae30ca77e3edebb0e8cf66c9ad = L.marker(
        [28.597666909640516, 76.98189142106901],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_bc2bc94580a14110b8862451e680b661 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_b43f48ae30ca77e3edebb0e8cf66c9ad.setIcon(
        icon_bc2bc94580a14110b8862451e680b661
    );

    var popup_cb699a0fad06ad21ce0d9ce24bfe75bd = L.popup({ maxWidth: "100%" });

    var html_b18a9f4565b800cc292d111fa8bcc9c0 = $(
        `<div id="html_b18a9f4565b800cc292d111fa8bcc9c0" style="width: 100.0%; height: 100.0%;">Pickpocketing: 49</div>`
    )[0];
    popup_cb699a0fad06ad21ce0d9ce24bfe75bd.setContent(
        html_b18a9f4565b800cc292d111fa8bcc9c0
    );

    marker_b43f48ae30ca77e3edebb0e8cf66c9ad.bindPopup(
        popup_cb699a0fad06ad21ce0d9ce24bfe75bd
    );

    var marker_8f4b3aec672957e83acf27fcaf52047a = L.marker(
        [28.59851986459696, 76.96484202551585],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_cda24faad838a77ca37989bea3267444 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_8f4b3aec672957e83acf27fcaf52047a.setIcon(
        icon_cda24faad838a77ca37989bea3267444
    );

    var popup_f15e299224f273a8a9f54067e5bcf224 = L.popup({ maxWidth: "100%" });

    var html_38fc8f536e033be930b34390d5697af9 = $(
        `<div id="html_38fc8f536e033be930b34390d5697af9" style="width: 100.0%; height: 100.0%;">Murder: 95</div>`
    )[0];
    popup_f15e299224f273a8a9f54067e5bcf224.setContent(
        html_38fc8f536e033be930b34390d5697af9
    );

    marker_8f4b3aec672957e83acf27fcaf52047a.bindPopup(
        popup_f15e299224f273a8a9f54067e5bcf224
    );

    var marker_78169a76ac000940821bede0b0d74503 = L.marker(
        [28.595573192616715, 76.98233890005],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_780f6153f32878619695a32d6f62f907 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_78169a76ac000940821bede0b0d74503.setIcon(
        icon_780f6153f32878619695a32d6f62f907
    );

    var popup_1f21d54b365834f1e596cba9b88bafaf = L.popup({ maxWidth: "100%" });

    var html_74d60ad9c7d1ecddab52ef3763570d27 = $(
        `<div id="html_74d60ad9c7d1ecddab52ef3763570d27" style="width: 100.0%; height: 100.0%;">Robbery: 50</div>`
    )[0];
    popup_1f21d54b365834f1e596cba9b88bafaf.setContent(
        html_74d60ad9c7d1ecddab52ef3763570d27
    );

    marker_78169a76ac000940821bede0b0d74503.bindPopup(
        popup_1f21d54b365834f1e596cba9b88bafaf
    );

    var marker_2cf7185d2e8e4a3eec91f938c712504a = L.marker(
        [28.646873024032956, 77.09163522176381],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_1d3201d2655f771c771a1e271dda9238 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "green",
        prefix: "glyphicon",
    });
    marker_2cf7185d2e8e4a3eec91f938c712504a.setIcon(
        icon_1d3201d2655f771c771a1e271dda9238
    );

    var popup_2da862a4924b1c924e780932c987fba9 = L.popup({ maxWidth: "100%" });

    var html_4d4169937684845f912f4a18c31e0f63 = $(
        `<div id="html_4d4169937684845f912f4a18c31e0f63" style="width: 100.0%; height: 100.0%;">Pickpocketing: 3</div>`
    )[0];
    popup_2da862a4924b1c924e780932c987fba9.setContent(
        html_4d4169937684845f912f4a18c31e0f63
    );

    marker_2cf7185d2e8e4a3eec91f938c712504a.bindPopup(
        popup_2da862a4924b1c924e780932c987fba9
    );

    var marker_944675af75545ed401b4b6a928a63846 = L.marker(
        [28.652285271587967, 77.07288375584508],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_0510d3f2a011dca43190a6b730b8ed92 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "red",
        prefix: "glyphicon",
    });
    marker_944675af75545ed401b4b6a928a63846.setIcon(
        icon_0510d3f2a011dca43190a6b730b8ed92
    );

    var popup_e5c675da4568a3a4564b8b565066f91d = L.popup({ maxWidth: "100%" });

    var html_f348b0bdd0260f26bc762dfbc86ddf0f = $(
        `<div id="html_f348b0bdd0260f26bc762dfbc86ddf0f" style="width: 100.0%; height: 100.0%;">Murder: 21</div>`
    )[0];
    popup_e5c675da4568a3a4564b8b565066f91d.setContent(
        html_f348b0bdd0260f26bc762dfbc86ddf0f
    );

    marker_944675af75545ed401b4b6a928a63846.bindPopup(
        popup_e5c675da4568a3a4564b8b565066f91d
    );

    var marker_e660f4da7b9c0b665ac871f8609d2df2 = L.marker(
        [28.639903931224264, 77.07802280395045],
        {}
    ).addTo(marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8);

    var icon_6c4e9d9ed2f1cf6fa92dee560a20dd84 = L.AwesomeMarkers.icon({
        extraClasses: "fa-rotate-0",
        icon: "info-sign",
        iconColor: "white",
        markerColor: "blue",
        prefix: "glyphicon",
    });
    marker_e660f4da7b9c0b665ac871f8609d2df2.setIcon(
        icon_6c4e9d9ed2f1cf6fa92dee560a20dd84
    );

    var popup_502fcdccb90c8c72e8f3df655c1cd965 = L.popup({ maxWidth: "100%" });

    var html_d138fe38a65af410b64a362e115210e9 = $(
        `<div id="html_d138fe38a65af410b64a362e115210e9" style="width: 100.0%; height: 100.0%;">Robbery: 43</div>`
    )[0];
    popup_502fcdccb90c8c72e8f3df655c1cd965.setContent(
        html_d138fe38a65af410b64a362e115210e9
    );

    marker_e660f4da7b9c0b665ac871f8609d2df2.bindPopup(
        popup_502fcdccb90c8c72e8f3df655c1cd965
    );

    marker_cluster_e6547b7c1b256e6dba64ddc93008dcd8.addTo(
        map_3df20e714d24c584fdb0eaa4e301794e
    );

    return (
        <div>
            <div
                class="folium-map"
                id="map_3df20e714d24c584fdb0eaa4e301794e"
            ></div>
        </div>
    );
}

export default Map;
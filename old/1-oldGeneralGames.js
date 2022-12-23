const oldGeneralGames =
  [
    // {
    //   "title": "Saints Row IV: Re-Elected",
    //   "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/saints-row-iv-re-elected-switch/hero",
    //   "url": "https://bit.ly/3VocB0x",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "15-12-2022",
    //   "id": "",
    //   "status": 1,
    //   "store2": "",
    //   "url2": "",
    //   "store3": "",
    //   "url3": "",
    //   "specialCode": "",
    //   "information": "",
    //   "instructions": "",
    //   "horizontal": "fechasProgramadas",
    //   "startDate": "2022-12-08T16:00:00.000Z",
    //   "endDate": "2022-12-15T16:00:00.000Z"
    // },
    // {
    //   "title": "Wildcat Gun Machine",
    //   "image": "https://images.gog-statics.com/103e864099b13c718b25e9fbcd9b04517bb2c91fe8f2c5195733e6fd2a88f04f_product_card_v2_mobile_slider_639.jpg",
    //   "url": "https://bit.ly/3UoCXOF",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "15-12-2022",
    //   "id": "",
    //   "status": 1,
    //   "store2": "",
    //   "url2": "",
    //   "store3": "",
    //   "url3": "",
    //   "specialCode": "",
    //   "information": "",
    //   "instructions": "",
    //   "horizontal": "fechasProgramadas",
    //   "startDate": "2022-12-08T16:00:00.000Z",
    //   "endDate": "2022-12-15T16:00:00.000Z"
    // },
    // {
    //   "title": "Ghost of a Tale",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/417290/capsule_616x353.jpg?t=1601974470",
    //   "url": "https://bit.ly/3WfAurf",
    //   "store": "GoG",
    //   "price": 5.00,
    //   "date": "15-12-2022",
    //   "id": "",
    //   "status": 1,
    //   "store2": "",
    //   "url2": "",
    //   "store3": "",
    //   "url3": "",
    //   "specialCode": "",
    //   "information": "",
    //   "instructions": "",
    //   "horizontal": "fechasProgramadas",
    //   "startDate": "2022-12-12T04:00:00.000Z",
    //   "endDate": "2022-12-15T14:00:00.000Z"
    // },
    // {
    //   "title": "Fort Triumph",
    //   "image": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FortTriumph_CookieByteEntertainment_S1_2560x1440-a0b5e1aeb62c1ee5550d97886ab475a3?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3VjrTmA",
    //   "store": "Epic Games",
    //   "price": 3.50,
    //   "date": "08-12-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "RPG in a Box",
    //   "image": "https://cdn1.epicgames.com/offer/0e76e53e157d416ab598342ed3a9dd5a/EGS_RPGinaBox_JustinArnold_S1_2560x1440-fef2661fad4d06cee988aa2a2c3383c7?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3i9dWJM",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "08-12-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Dark Deity",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1374840/header.jpg?t=1666897103",
    //   "url": "https://bit.ly/3EgyWWD",
    //   "store": "Epic Games",
    //   "price": 10.00,
    //   "date": "24-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Evil Dead: The Game",
    //   "image": "https://cdn1.epicgames.com/offer/95e09a8c24c44684bca1a6f25aea920c/EGS_EvilDeadTheGame_SaberInteractiveInc_S1_2560x1440-fde136bc32f2b93006b9df0bc421fec0_2560x1440-fde136bc32f2b93006b9df0bc421fec0",
    //   "url": "https://bit.ly/3G4OU8r",
    //   "store": "Epic Games",
    //   "price": 16.00,
    //   "date": "24-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Alba - A Wildlife Adventure",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1337010/header.jpg?t=1658225188",
    //   "url": "https://bit.ly/3zFMdX7",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "17-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Shadow Tactics",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/418240/header.jpg?t=1662471039",
    //   "url": "https://bit.ly/3DrOI04",
    //   "store": "Epic Games",
    //   "price": 20.00,
    //   "date": "17-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Filament",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1137350/header_alt_assets_1.jpg?t=1663247662",
    //   "url": "https://bit.ly/3DDB2kb",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "10/11/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Rising Storm 2: Vietnam",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/418460/header.jpg?t=1649888709",
    //   "url": "https://bit.ly/3SGRp3y",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "10/11/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Need for Speed™ Heat - McLaren F1 Black Market Delivery",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1281880/header.jpg?t=1667936460",
    //   "url": "https://bit.ly/3WNAmzY",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "15-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Dying Light 2 Stay Human: Dying Laugh Bundle",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2156750/header.jpg?t=1667503160",
    //   "url": "https://bit.ly/3U4M6MQ",
    //   "store": "Steam",
    //   "price": 0.00,
    //   "date": "2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Limited Digital Bonus - Horse Tales: Emerald Valley Ranch",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2164520/header.jpg?t=1667553629",
    //   "url": "https://bit.ly/3NAxN01",
    //   "store": "Steam",
    //   "price": 3.50,
    //   "date": "10-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Unicorn Tack Set - Horse Tales: Emerald Valley Ranch",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2154320/header.jpg?t=1667553686",
    //   "url": "https://bit.ly/3WwwF1H",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "10-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Need for Speed™ Payback: Pontiac Firebird & Aston Martin DB5 Superbuild Bundle",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1328031/header.jpg",
    //   "url": "https://bit.ly/3h5Q1dW",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "08-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Warhammer: Vermintide 2",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/552500/header.jpg?t=1661422117",
    //   "url": "https://bit.ly/3sWOAB5",
    //   "store": "Steam",
    //   "price": 15.00,
    //   "date": "07-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Jazz Jackrabbit 2 Collection",
    //   "image": "https://images.gog-statics.com/c2941f12a019aea90d3b4c88d16d0c8eb5af95ec4f743f97c03e217f0ebe1278_product_card_v2_mobile_slider_639.jpg",
    //   "url": "https://bit.ly/3WjDVhl",
    //   "store": "GoG",
    //   "price": 5.00,
    //   "date": "03-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Get The Quarry - 50s Throwback Character Outfits",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2101870/header.jpg?t=1666632967",
    //   "url": "https://bit.ly/3faZO1y",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "01-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Need for Speed™ Heat - McLaren F1 Black Market Delivery",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1281880/header.jpg?t=1667936460",
    //   "url": "https://bit.ly/3WNAmzY",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "15-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Dying Light 2 Stay Human: Dying Laugh Bundle",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2156750/header.jpg?t=1667503160",
    //   "url": "https://bit.ly/3U4M6MQ",
    //   "store": "Steam",
    //   "price": 0.00,
    //   "date": "2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Limited Digital Bonus - Horse Tales: Emerald Valley Ranch",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2164520/header.jpg?t=1667553629",
    //   "url": "https://bit.ly/3NAxN01",
    //   "store": "Steam",
    //   "price": 3.50,
    //   "date": "10-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Unicorn Tack Set - Horse Tales: Emerald Valley Ranch",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2154320/header.jpg?t=1667553686",
    //   "url": "https://bit.ly/3WwwF1H",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "10-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Need for Speed™ Payback: Pontiac Firebird & Aston Martin DB5 Superbuild Bundle",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1328031/header.jpg",
    //   "url": "https://bit.ly/3h5Q1dW",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "08-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Warhammer: Vermintide 2",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/552500/header.jpg?t=1661422117",
    //   "url": "https://bit.ly/3sWOAB5",
    //   "store": "Steam",
    //   "price": 15.00,
    //   "date": "07-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Jazz Jackrabbit 2 Collection",
    //   "image": "https://images.gog-statics.com/c2941f12a019aea90d3b4c88d16d0c8eb5af95ec4f743f97c03e217f0ebe1278_product_card_v2_mobile_slider_639.jpg",
    //   "url": "https://bit.ly/3WjDVhl",
    //   "store": "GoG",
    //   "price": 5.00,
    //   "date": "03-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Get The Quarry - 50s Throwback Character Outfits",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2101870/header.jpg?t=1666632967",
    //   "url": "https://bit.ly/3faZO1y",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "01-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Internet Cafe Simulator - Steam Key",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1136160/header.jpg?t=1628071219",
    //   "url": "https://bit.ly/3UgOG1Y",
    //   "store": "Fanatical / Steam",
    //   "price": 5.00,
    //   "date": "??-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Saturnalia",
    //   "image": "https://cdn2.unrealengine.com/egs-saturnalia-santaragione-g1c-02-1920x1080-11bfd619f117.jpg?h=720&resize=1&w=1280",
    //   "url": "https://bit.ly/3TiMzuF",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "03/11/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,

    // {
    //   "title": "Genesis Alpha One Deluxe Edition",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/712190/header.jpg?t=1643290109",
    //   "url": "https://bit.ly/3zowVWF",
    //   "store": "GoG",
    //   "price": 5.00,
    //   "date": "30-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Black Book - Endless Battles",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1879710/header.jpg?t=1661285092",
    //   "url": "https://bit.ly/3DbbPfh",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "??-11-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Real Royale - We're Bok! Bundle - DLC",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/2071780/header.jpg?t=1661164811",
    //   "url": "https://bit.ly/3Cvdfmb",
    //   "store": "Steam",
    //   "price": 0.00,
    //   "date": "??-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Evoland Legendary Edition",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1020470/header.jpg?t=1659962700",
    //   "url": "https://bit.ly/3CRWsJY",
    //   "store": "Epic Games",
    //   "price": 7.00,
    //   "date": "27/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Fallout 3: Game of the Year Edition",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/22370/header.jpg?t=1665072789",
    //   "url": "https://bit.ly/3TfgUd2",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "27/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Awesomenauts - Bozo Gunk Skin",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/634016/header.jpg?t=1665422965",
    //   "url": "https://bit.ly/3gnbP4j",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "24-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Darkwood",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg?t=1634730362",
    //   "url": "https://bit.ly/3rSV9Eh",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "20/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "ToeJam & Earl: Back in the Groove!",
    //   "image": "https://cdn1.epicgames.com/spt-assets/428b51d4cd29482889841fa188b362b4/toejam-and-earl-back-in-the-groove-offer-15w7f.png?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3SJNhkj",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "20/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Rising Hell",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/657000/header.jpg?t=1642664759",
    //   "url": "https://bit.ly/3rk1310",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "13/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "A Plague Tale Digital Goodies Pack",
    //   "image": "https://images.gog-statics.com/cea28e4c25bb07b96848d7eb4ed08e6621296137161491c9529a1d13f71acb75_product_card_v2_mobile_slider_639.jpg",
    //   "url": "https://bit.ly/3yUjIEA",
    //   "store": "GoG",
    //   "price": 5.00,
    //   "date": "20-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Minion Masters - Torment",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/2155210/header.jpg?t=1665679854",
    //   "url": "https://bit.ly/3ENCQYE",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "20-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Slain: Back From Hell",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/369070/header.jpg?t=1633203325",
    //   "url": "https://bit.ly/3SqyR8k",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "13/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Ubisoft+",
    //   "image": "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YL1DB22kbZzcTtZQsXVau/d04e1767abf872d793386ecf3eddb7f7/Ubisoft_News-Thumbnail_1_-Discount.jpg",
    //   "url": "https://bit.ly/3eNeNyl",
    //   "store": "Ubisoft Connect",
    //   "price": 15.00,
    //   "date": "10-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Runbow",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/464650/header.jpg?t=1572362744",
    //   "url": "https://bit.ly/3xL6xp6",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "06/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "The Drone Racing League Simulator",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/641780/header.jpg?t=1651255451",
    //   "url": "https://bit.ly/3Sna1G7",
    //   "store": "Epic Games",
    //   "price": 4.00,
    //   "date": "06/10/2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Need for Speed™ Heat - Keys to the Map",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1281881/header.jpg?t=1663269323",
    //   "url": "https://bit.ly/3rcq5Pn",
    //   "store": "Steam",
    //   "price": 7.50,
    //   "date": "04-10-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "Leeward Episode 1",
    //   "image": "https://www.gamerpower.com/offers/1/63260707d15df.jpg",
    //   "url": "https://bit.ly/3QPBv61",
    //   "store": "itch.io",
    //   "price": 6.99,
    //   "date": "??-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    // }
    // ,
    // {
    //   "title": "The Captain",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1721530/header.jpg?t=1643303221",
    //   "url": "https://bit.ly/3L6myv9",
    //   "store": "Epic Games",
    //   "price": 8.00,
    //   "date": "22-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Spirit of the North",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1213700/header.jpg?t=1653298628",
    //   "url": "https://bit.ly/3Qq0vR7",
    //   "store": "Epic Games",
    //   "price": 8.10,
    //   "date": "22-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Hundred Days - Winemaking Simulator",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1042380/header.jpg?t=1660662008",
    //   "url": "https://bit.ly/3q8yZNu",
    //   "store": "Epic Games",
    //   "price": 11.00,
    //   "date": "15-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Realm Royale Reforged Epic Launch Bundle",
    //   "image": "https://cdn1.epicgames.com/offer/5fcf6f3031c547f789e29c18b422ca67/RRR_EGS_HeroCarousel_1920x1080_english_1920x1080-2c1d0034f5217fc31b07288ed836682b",
    //   "url": "https://bit.ly/3CRBfA2",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "15-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Gloomhaven",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/780290/header.jpg?t=1660746451",
    //   "url": "https://bit.ly/3BL0Vh6",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "29-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Submerged: Hidden Depths",
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/1614270/header.jpg?t=1647071978",
    //   "url": "https://bit.ly/3dQLGJP",
    //   "store": "Epic Games",
    //   "price": 12.00,
    //   "date": "08-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Knockout City™ - log in to claim your free armazillo bundle",
    //   "image": "https://cdn2.unrealengine.com/egs-armazillo-h-1-1920x1080-6bb59b6c426c.png",
    //   "url": "https://bit.ly/3ecXWEE",
    //   "store": "Epic Games",
    //   "price": 0.00,
    //   "date": "08-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Ring of Pain",
    //   "image": "https://cdn1.epicgames.com/offer/b9c7474c6bdf4e9ab8ca5a5da60059d4/EGS_RingofPain_SimonBoxerTwiceDifferent_S1_2560x1440-a913b4a4f4ad707131f0d3a681847afa?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3pujizE",
    //   "store": "Epic Games",
    //   "price": 13.00,
    //   "date": "01-09-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Destiny 2: Bungie 30th Anniversary Pack",
    //   "image": "https://cdn-ext.fanatical.com/production/product/1280x720/7c3773ea-fe36-46d4-a10c-22039e7ad115.jpeg",
    //   "url": "https://bit.ly/3CqNhjL",
    //   "store": "Epic Games",
    //   "price": 20.00,
    //   "date": "30-08-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // ,
    // {
    //   "title": "Rumbleverse™ boom boxer content pack",
    //   "image": "https://cdn1.epicgames.com/offer/0bef9383794a4d779ba0628084b14cba/LANDSCAPE_2560x1440_2560x1440-a8a050190fae18c0deb92c4048c5b1df_2560x1440-a8a050190fae18c0deb92c4048c5b1df?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3zLqUmh",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "25-08-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Cook, Serve, Delicious! 3?!",
    //   "image": "https://cdn1.epicgames.com/spt-assets/28430738e6554ff0a67d9a93402c4348/cook-serve-delicious-3-offer-11zbq.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3QiEPqr",
    //   "store": "Epic Games",
    //   "price": 8.00,
    //   "date": "18-08-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Despotism 3k",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/699920/header.jpg?t=1657903181",
    //   "url": "https://bit.ly/3vGq0pU",
    //   "store": "Steam",
    //   "price": 5.00,
    //   "date": "11-08-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Lawn Mowing Simulator",
    //   "image": "https://cdn1.epicgames.com/spt-assets/977ce2dee0fe437d90d2a67adf9917d8/lawn-mowing-simulator-offer-1615h.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3v4DTxS",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "04-08-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Shop Titans",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1258080/header.jpg?t=1641420416",
    //   "url": "https://bit.ly/3ObM1mO",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "28-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Tannenberg",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/633460/header.jpg?t=1655194937",
    //   "url": "https://bit.ly/3ceQurG",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "28-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Wonder Boy: The Dragon's Trap",
    //   "image": "https://cdn1.epicgames.com/spt-assets/e488839155be4d05bb14f6e05129daef/wonder-boy-the-dragons-trap-offer-3hg29.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3bWAjzc",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "21-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Idle Champions of the Forgotten Realms",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/627690/header_alt_assets_16_latam.jpg?t=1656532394",
    //   "url": "https://bit.ly/3OPkSqU",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "21-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Ancient Enemy",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/993790/header.jpg?t=1628510098",
    //   "url": "https://bit.ly/3abxwBo",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "14-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Killing Floor 2",
    //   "image": "https://cdn1.epicgames.com/offer/affc33b82405457595a032f00284abd2/7b71ad1e-a830-4834-ab00-5693f803656b_2560x1440-4995a845423263335d529fcae667e979",
    //   "url": "https://bit.ly/3OOV6mg",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "14-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Hood: Outlaws & Legends",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/927350/header.jpg?t=1649341139",
    //   "url": "https://bit.ly/3aakS5H",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "07-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Geneforge 1 - Mutagen",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1424710/header.jpg?t=1618516197",
    //   "url": "https://bit.ly/3OmfNGn",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "07-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Iratus: Lord of the Dead",
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/807120/header.jpg?t=1651768690",
    //   "url": "https://bit.ly/3zTaEkO",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "07-07-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "A Game Of Thrones: The Board Game Digital Edition",
    //   "image": "https://cdn1.epicgames.com/spt-assets/61c1413e3db0423f9ddd4a5edbee717e/a-game-of-thrones-offer-11gxu.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3O0yEXs",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "30-06-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Car Mechanic Simulator 2018",
    //   "image": "https://cdn1.epicgames.com/offer/226306adde104c9092247dcd4bfa1499/EGS_CarMechanicSimulator2018_RedDotGames_S1_2560x1440-3489ef1499e64c168fdf4b14926d2c23?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3Qsxi9g",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "30-06-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Supraland",
    //   "image": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Supraland_SupraGames_S1_2560x1440-9709ca476b82b7482b32dd7401c1bbe1?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3xhedOI",
    //   "store": "Epic Games",
    //   "price": 8.00,
    //   "date": "23-06-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "Wolfenstein: The New Order",
    //   "image": "https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/egs-vault-w3-1920x1080_1920x1080-4a501d33fb4ac641e3e1e290dcc0e6c1?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3Q8gk02",
    //   "store": "Epic Games",
    //   "price": 18.00,
    //   "date": "09-06-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "BioShock: The Collection",
    //   "image": "https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/EN_2K_Bioshock_%20The%20Collection_S1_2560x1440_2560x1440-e9e66f8882e2faf56fd81eddab41dc55?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3PI7aXQ",
    //   "store": "Epic Games",
    //   "price": 30.00,
    //   "date": "02-06-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 2,
    // }
    // ,
    // {
    //   "title": "DOOM 64",
    //   "image": "https://cdn1.epicgames.com/offer/0ea70edafcc54b3191e262bbb6971981/EGS_DOOM64_idSoftwareNightdiveStudios_S1_2560x1440-ad0080b34010d3c86254227a14e96494?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3CfXTBO",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "25-08-2022",
    //   "id": "",
    //   "horizontal": true,
    //   "status": 1,
    //   "store2": "",
    //   "url2": "",
    //   "store3": "",
    //   "url3": "",
    //   "specialCode": "",
    //   "information": "",
    //   "instructions": "",
    //   "startDate": "",
    //   "endDate": ""
    // },
    // {
    //   "id": "",
    //   "horizontal": true,
    //   "image": "https://cdn1.epicgames.com/undefined/offer/EGS_ThunderLotus_JotunValhallaEdition_S1-2560x1440-3de6d0151b1c97a08a8579167814682c.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3kLXNrZ",
    //   "title": "Jotun: Valhalla Edition",
    //   "store": "Epic Games",
    //   "price": 7.50,
    //   "date": "19-05-2022",
    //   "status": 2,
    // }
    // ,
    // {
    //   "id": "",
    //   "horizontal": true,
    //   "image": "https://cdn.akamai.steamstatic.com/steam/apps/517710/header.jpg?t=1628689853",
    //   "url": "https://bit.ly/3l6QBXA",
    //   "title": "Redout: Enhanced Edition",
    //   "store": "Epic Games",
    //   "price": 4.00,
    //   "date": "19-05-2022",
    //   "status": 2,
    // }
    // ,
    // {
    //   "id": "",
    //   "horizontal": true,
    //   "image": "https://cdn1.epicgames.com/spt-assets/5199b206e46947ebad5e5c282e95776f/terraforming-mars-offer-1j70f.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3OZixdl",
    //   "title": "Terraforming Mars",
    //   "store": "Epic Games",
    //   "price": 0.00,
    //   "date": "12-05-2022",
    //   "status": 2,
    // }
    // ,
    // {
    //   "id": "",
    //   "horizontal": true,
    //   "image": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JustDieAlready_DoubleMoose_S5_1920x1080-ab0a72182a2dbbead850ff3ab81a4f73?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/3F4JPdP",
    //   "title": "Just Die Already",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "05-05-2022",
    //   "status": 2,
    // }
    // ,
    // {
    //   "id": "",
    //   "horizontal": true,
    //   "image": "https://cdn1.epicgames.com/spt-assets/8e9d84a3fd2b4a3cbe4ac6b89ce9789d/paradigm-offer-1wcfe.jpg?h=480&resize=1&w=854",
    //   "url": "https://bit.ly/37UPDug",
    //   "title": "Paradigm",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "05-05-2022",
    //   "status": 2,
    // }

    // ,
    // {
    //   "id": "",
    //   "horizontal": true,
    //   "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/459370/header.jpg?t=1575922438",
    //   "url": "https://bit.ly/3kdI9VN",
    //   "title": "Riverbond",
    //   "store": "Epic Games",
    //   "price": 5.00,
    //   "date": "28-04-2022",
    //   "status": 2,
    // }
  ];

export default GeneralGames;
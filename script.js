// Product Database with Tags and Descriptions
const products = {
// PS4 Games
    1: {
        id: 1,
        name: "Red Dead Redemption II", 
        category: "Playstation 4 Game",
        tags: ["Action", "Western"],
        genre: "Action", 
        price: 2036,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/red-dead-redemption-2-asia-ps4-.webp",
        fullDescription: `America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs.
        Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater,
        Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation
        massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.
        As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty
        to the gang who raised him.`,
        publisher: "Rockstar Games",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Rockstar Games"
    },

    2: {
        id: 2,
        name: "Sleeping Dogs: Definitive Edition",
        category: "Playstation 4 Game", 
        tags: ["Action", "Open World"],
        genre: "Action",
        price: 1050,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/ps4-sleeping-dogs-definitive-edition-r2.webp",
        fullDescription: `Sleeping Dogs: Definitive Edition is a remastered version of Sleeping Dogs. The game runs at native 1080p
        and features many graphical improvements, gameplay tweaks over the original game, as well as all of the extra content (DLC)
        from the original. Unlike the original, where all DLC are accessed at any point in the game, Definitive Edition unlocks
        the DLCs once the player reaches their respective plots.`,
        publisher: "Square Enix", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "United Front Games",
    },

    3: {
        id: 3,
        name: "The Last of Us Part 2",
        category: "Playstation 4 Game",
        tags: ["Action", "Story Driven"],
        genre: "Action", 
        price: 1725,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/ps4_the_last_of_us_2_r2_1.webp",
        fullDescription: `The Last of Us Part 2 is an action-adventure game set in a post-apocalyptic United States, continuing
        the story of Ellie and Joel five years after the first game. A violent event shatters their peaceful life in Jackson,
        Wyoming, compelling Ellie to embark on a relentless quest for vengeance across a dangerous and visually stunning world,
        where she must confront both human and infected enemies using stealth, firearms, and improvised weapons.`, 
        publisher: "Sony Interactive", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Naughty Dog"

    },

    4: {
        id: 4,
        name: "Ghost of Tsushima",
        category: "Playstation 4 Game",
        tags: ["Action", "Open World"],  
        genre: "Action", 
        price: 2353,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/ps4-ghost-of-tsushima-_r2_-1_1.webp",
        fullDescription: `Ghost of Tsushima is an open-world action-adventure game for the PS4 that casts players as Jin Sakai,
        one of the last surviving samurai on Tsushima Island during the 1274 Mongol invasion. The game focuses on an internal
        conflict as Jin must abandon his honorable samurai traditions to adopt the lethal, unconventional tactics of 'The Ghost'
        to protect his home and people from the ruthless general Khotun Khan.`,
        publisher: "Sony Interactive",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Sucker Punch Productions"
    },

    5: {
        id: 5,
        name: "Bloodborne: Game of The Year Edition",
        category: "Playstation 4 Game", 
        tags: ["Action", "Survival Horror"],
        genre: "Action",
        price: 1095,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/bloodborne-goty-eu-ps4.jpg",
        fullDescription: `The Bloodborne: Game of the Year Edition for PS4 is a complete package containing the original action RPG
        and its expansion, The Old Hunters DLC. It includes the base game where you explore the cursed city of Yharnam to fight
        beast-like enemies with strategic, offensive combat, along with all the additional content from the DLC. The DLC adds three
        new areas, five bosses, new weapons, and outfits, and can be installed directly onto the game disc.`,
        publisher: "Sony Computer Entertainment",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "From Software"
    },

    6: {
        id: 6,
        name: "God of War Ragnarok",
        category: "Playstation 4 Game", 
        tags: ["Action", "Adventure"], 
        genre: "Adventure",
        price: 1990,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/ps4-god-of-war-ragnarok-r1-cover.jpg",
        fullDescription: `The game picks up three years after the events of God of War (2018), with Fimbulwinter, the three-year-long
        winter, well underway. Kratos and Atreus are in hiding in Midgard, but the death of Baldur in the previous game has put
        them on a collision course with the Aesir gods, specifically a vengeful Freya, the Allfather Odin, and his son Thor.`,
        publisher: "Sony Interactive Entertainment", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Santa Monica Studio"
    },

    7: {
        id: 7,
        name: "The Witcher 3 Wild Hunt",
        category: "Playstation 4 Game",
        tags: ["Adventure", "Role-Playing"], 
        genre: "Adventure", 
        price: 2385,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/ps4_g._the_witcher_3_goty_r2.webp",
        fullDescription: `The game takes place in a fictional fantasy world based on Slavic folklore. Players control Geralt of Rivia,
        a monster slayer for hire known as a Witcher, and search for his adopted daughter who is on the run from the Wild Hunt.`,
        publisher: "CD Projekt", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "CD Projekt"
    },

    8: {
        id: 8,
        name: "Assassin's Creed Mirage",
        category: "Playstation 4 Game", 
        tags: ["Action", "Adventure"], 
        genre: "Adventure", 
        price: 1295,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/ps4-assassins-creed-mirage-cover.webp",
        fullDescription: `Originally envisioned as an expansion for Valhalla, the game was reworked into a standalone title to expand
        its scope. The design philosophy behind Mirage—the first game to be developed primarily by Ubisoft Bordeaux, previously just
        a support studio—was to return to the series' roots by focusing on stealth, parkour, and assassinations over the role-playing
        elements featured heavily in recent installments. As a result, the game is much smaller in scale than its predecessors and
        combines elements introduced in them with those found in earlier installments of the franchise.`,
        publisher: "Ubisoft", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Ubisoft Bordeaux"
    },

    9: {
        id: 9,
        name: "Resident Evil 3",
        category: "Playstation 4 Game", 
        tags: ["Adventure", "Horror"], 
        genre: "Adventure", 
        price: 1095,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/resident-evil-3-us-ps4.jpg",
        fullDescription: `Resident Evil 3 is a 2020 survival horror game for the PS4 that is a remake of the 1999 classic. Players
        control Jill Valentine, a former S.T.A.R.S. officer, as she attempts to escape a zombie-infested Raccoon City while being
        relentlessly stalked by the bio-weapon Nemesis. The game features updated over-the-shoulder gameplay, an emphasis on action,
        and is built on the RE Engine for photorealistic graphics. It was released alongside an online multiplayer mode called
        Resident Evil Resistance.`,
        publisher: "Capcom",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Capcom"
    },

    10: {
        id: 10,
        name: "Resident Evil 2",
        category: "Playstation 4 Game",
        tags: ["Adventure", "Horror"],
        genre: "Adventure",
        price: 2995,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/resident-evil-2-gameoneph-ps4-r1.png",
        fullDescription: `Resident Evil 2 for PS4 is a 2019 survival horror game, completely rebuilt from the ground up, that
        reimagines the 1998 classic. Players choose between rookie cop Leon S. Kennedy and college student Claire Redfield as they
        try to escape Raccoon City during a zombie outbreak caused by the Umbrella Corporation. The remake features a new
        over-the-shoulder camera, modern controls, and a 'deeper narrative experience' while retaining classic gameplay elements
        like exploration, puzzle-solving, and resource management.`,
        publisher: "Capcom", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Capcom"
    },

    11: {
        id: 11,
        name: "Street Fighter 6 - Years 1-2 Edition",
        category: "Playstation 4 Game", 
        tags: ["2D Fighter", "Multiplayer"],
        genre: "Fighting",
        price: 1995,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/ps4_street_fighter_6_year_1-2_fighters_edition.jpg",
        fullDescription: `The Street Fighter 6 - Years 1-2 Fighters Edition for PS4 includes the base game and all DLC characters,
        stages, and cosmetic items released in the first two years, such as the Year 1 and Year 2 Character Passes and their
        associated content. This edition provides a complete experience for players on PlayStation 4, granting access to the full
        26-character roster, 20 stages, and additional cosmetic items, along with all the original game's features like World Tour,
        Battle Hub, and Fighting Ground.`,
        publisher: "Capcom", 
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Capcom"
    },

    12: {
        id: 12,
        name: "Marvel Vs Capcom Fighting Collections : Arcade Classics",
        category: "Playstation 4 Game",
        tags: ["2D Fighter", "Multiplayer"], 
        genre: "Fighting", 
        price: 2095,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/marvel-vs-capcom-fighting-collection-arcade-classics-cover-r2_1.jpg",
        fullDescription: `A compilation of seven arcade games, developed by Capcom, that includes most of the Marvel-licensed 2D
        fighting titles from 1993 to 2000, plus the beat 'em up The Punisher. The collection offers online play with rollback
        netcode, training modes, and features like a gallery with over 500 pieces of artwork and a music player with over 200
        tracks. It also includes beginner-friendly options such as one-button specials and the ability to save progress almost anywhere.`,
        publisher: "Capcom",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Capcom"
    },

    13: {
        id: 13,
        name: "Fatal Fury: City of the Wolves",
        category: "Playstation 4 Game",
        tags: ["2D Fighter", "Multiplayer"], 
        genre: "Fighting", 
        price: 2644,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/ps4-fatal-fury-city-of-the-wolves_1.webp",
        fullDescription: `Fatal Fury: City of the Wolves is a fighting game for PS4 that revives the legendary series with a new art
        style, evolved combat systems like the REV system, and a single-player RPG mode called 'Episodes of South Town'. It features
        both newcomers and returning fan-favorite characters and offers two control schemes to cater to players of all skill levels:
        the technical Arcade Style and the beginner-friendly Smart Style. The game also includes online multiplayer with rollback
        netcode, a training mode, and other features like 'Colour Edit' for character customization.`,
        publisher: "SNK",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "KOF Studio"
    },

    14: {
        id: 14,
        name: "Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto",
        category: "Playstation 4 Game",
        tags: ["Arena Fighter", "Anime"], 
        genre: "Fighting", 
        price: 3462,
        rating: "★★☆☆☆",
        image: "Product Images/Playstation/PS4/ps4-naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-cover.webp",
        fullDescription: `Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto for PS4 is the complete edition of the game,
        including the base Storm 4 game, all season pass DLC, and the 'Road to Boruto' expansion. It features a revamped battle
        system, over 100 characters, a 'Change Leader' system, and the 'Road to Boruto' story mode focusing on the next generation
        of ninjas, which includes new characters like Boruto and Sarada, new areas in the Hidden Leaf Village, and the story from
        Boruto: Naruto the Movie.`,
        publisher: "Bandai Namco",
        platform: "PS4",
        ageRating: "T-Teen",
        developer: "CyberConnect2"
    },

    15: {
        id: 15,
        name: "Capcom Fighting Collections 2",
        category: "Playstation 4 Game", 
        tags: ["2D Fighter", "Multiplayer"], 
        genre: "Fighting", 
        price: 1016,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/ps4_g._capcom_fighting_collection_2_r3_.webp",
        fullDescription: `Capcom Fighting Collection 2 is a PS4 compilation of eight arcade fighting games from the late 1990s and
        early 2000s, including classics like Power Stone 1 & 2, Capcom vs. SNK 2, and Street Fighter Alpha 3 Upper. The collection
        features modern online play with rollback netcode, a robust training mode, and an extensive museum with art and music
        galleries. It also includes beginner-friendly options like one-button specials, adjustable difficulty, and save/load features.`,
        publisher: "Capcom", 
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Capcom"
    },

    16: {
        id: 16,
        name: "Need For Speed Hot Pursuit Remastered",
        category: "Playstation 4 Game",
        tags: ["Racing"],
        genre: "Racing",
        price: 1095,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/playstation_ps4_need_for_speed_hot_pursuit_remastered_r1__1.webp",
        fullDescription: `Need for Speed: Hot Pursuit Remastered for PS4 is a revamped version of the 2010 racing game, featuring
        updated visuals and cross-platform multiplayer. It places players in the roles of either a cop or a racer in the fictional
        Seacrest County, with the goal of outsmarting or apprehending rivals in high-performance cars. The game includes all the
        original main DLC, adding more than 30 challenges and six hours of extra gameplay, and a deep single-player career that
        links to a seamless multiplayer experience.`,
        publisher: "Electronic Arts", 
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Criterion Games"
    },

    17: {
        id: 17,
        name: "Gran Turismo 7 - R2",
        category: "Playstation 4 Game",
        tags: ["Racing"],
        genre: "Racing", 
        price: 2990,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/ps4-gran-turismo-7-r2_1_1.webp",
        fullDescription: `Gran Turismo 7 shines a spotlight on the long history of cars and their culture as the player embarks
        on a journey to collect the most historic examples. The game is designed to allow players to learn about the origins of
        each model and their place in history naturally as the game progresses.`,
        publisher: "Sony Interactive Entertainment", 
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Polyphony Digital"
    },

    18: {
        id: 18,
        name: "Cars 3 Driven to Win All",
        category: "Playstation 4 Game",
        tags: ["Racing"], 
        genre: "Racing",
        price: 1095,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/cars_1600x.webp",
        fullDescription: `The road to becoming a champion starts with this first look of Cars 3: Driven to Win! Speed into the world of Lightning McQueen, Cruz Ramirez, Jackson Storm and other beloved characters as you determine your path to racing mastery!
        Start your engines and gear up for the ultimate racing experience in Cars 3: Driven to Win inspired by Disney Pixar’s film, Cars 3. Play with over 20 customizable characters including Lightning McQueen, Jackson Storm, Cruz Ramirez and the next generation of racers in over 20 tracks set in iconic locations from the film such as Radiator Springs.
        Train and advance your abilities in 6 game modes and challenge your family and friends in the Battle Race to become the Ultimate Champion. On the road to becoming a Hall of Fame Driver, training and skill will give you an edge in a race that anyone can win.`,
        publisher: "Warner Bros. Interactive Entertainment (WB Games)",
        platform: "PS4",
        ageRating: "E-Everyone",
        developer: "Avalanche Software"
    },

    19: {
        id: 19,
        name: "Shin Megami Tensei V: Vengeance", 
        category: "Playstation 4 Game", 
        tags: ["JRPG"],
        genre: "Role Playing", 
        price: 1995,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/ps4-shin-megami-tensei-v--vengeance_1.jpg",
        fullDescription: `Shin Megami Tensei V: Vengeance is a definitive version of the 2021 game that includes a brand new
        "Canon of Vengeance" storyline in addition to the original "Canon of Creation," alongside new areas, demons, and
        quality-of-life improvements. 
        
        Players can choose to follow either a new revenge-focused narrative with new characters or the original story, which centers on a conflict between angels and demons in a post-apocalyptic Tokyo. The definitive edition
        also features enhanced visuals, a more accessible battle system, and greater exploration mechanics.`,
        publisher: "Sega of America Inc",
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Atlus"
    },

    20: {
        id: 20,
        name: "Final Fantasy I-VI Pixel Remaster Collection Anniversary Edition", 
        category: "Playstation 4 Game",
        tags: ["JRPG"], 
        genre: "Role Playing", 
        price: 4925,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/ps4-final-fantasy-i-vi-collection-anniversary-ed-_r1_-cover.jpg",
        fullDescription: `The Final Fantasy I-VI Pixel Remaster Collection Anniversary Edition is a physical collection featuring
        the first six Final Fantasy games, updated with modern 2D pixel graphics by original artist Kazuko Shibuya and a
        rearranged soundtrack supervised by Nobuo Uematsu.
        
        This anniversary edition, available on PlayStation 4 and Nintendo Switch, includes quality-of-life improvements like a modernized UI, auto-battle, and the ability to turn off random encounters. It
        also adds extra content, such as an illustration gallery, bestiary, and music player, along with a special sticker sheet
        for the anniversary edition.`,
        publisher: "Square Enix", 
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Square Enix"
    },

    21: {
        id: 21,
        name: "Romancing Saga 2: Revenge of the 7",
        category: "Playstation 4 Game",
        tags: ["JRPG"],
        genre: "Role Playing", 
        price: 2550,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/ps4-romancing-saga-2-revenge-of-the-seven-_r3_-cover.webp",
        fullDescription: `Romancing SaGa 2: Revenge of the Seven is a 3D remake of the 1993 RPG classic, Romancing SaGa 2, which
        features a multigenerational story where you guide a dynasty of emperors in their fight against the corrupted Seven Heroes.
        
        This remake, developed by Square Enix, reimagines the original 2D world in 3D graphics and modernizes gameplay with updated
        systems and new features while preserving the core nonlinear experience and strategic depth.`,
        publisher: "Square Enix", 
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Xeen Inc"
    },

    22: {
        id: 22,
        name: "Persona 5 Tactica",
        category: "Playstation 4 Game",
        tags: ["JRPG"],  
        genre: "Role Playing", 
        price: 1750,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/persona-5-tactica-ps4_1.webp",
        fullDescription: `Persona 5 Tactica is a tactical role-playing game that takes the Phantom Thieves on a new, separate
        adventure in a bizarre meta-verse where they must lead a revolution against a tyrannical military force called the
        Legionnaires. The gameplay shifts from the life-sim elements of the original Persona 5 to a turn-based, grid-based combat
        system focused on strategic movement and cover. Players use Personas, guns, and special "Triple Threat" attacks to overthrow
        enemies, while also customizing their party with a deep, flexible skill tree and Persona fusion system.`,
        publisher: "Atlus",
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Atlus"
    },

    23: {
        id: 23,
        name: "Sword Art Online Last Recollection", 
        category: "Playstation 4 Game", 
        tags: ["RPG", "Anime"],
        genre: "Role Playing", 
        price: 2746,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/sword-art-online-collection-ps4_1.webp",
        fullDescription: `Sword Art Online is a Japanese light novel series and anime that follows players trapped in a virtual
        reality MMORPG, where death in the game means death in real life. In the initial scenario, 10,000 players are unable to
        log out of the game Sword Art Online and are told the only way to escape is to clear all 100 floors of the floating castle,
        Aincrad. The story centers on the protagonist, Kirito, a skilled "beater" (beta tester), and his experiences in this deadly
        virtual world.`,
        publisher: "ASCII Media Works",
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Argus"
    },

    24: {
        id: 24,
        name: "Overcooked All You Can Eat", 
        category: "Playstation 4 Game", 
        tags: ["Simulation", "CO-OP"],
        genre: "Simulation", 
        price: 1295,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/ps4-overcooked-all-you-can-eat-r1-cover_1.webp",
        fullDescription: `Overcooked!, Overcooked! 2 and all additional content are blended together and remastered in this delicious definitive edition! Enjoy hundreds of levels of cooperative cooking chaos across increasingly perilous and obscure kitchens. 
        
        Overcooked is a chaotic couch co-op cooking game for 1-4 players working as a team, you and your fellow chefs must prepare, cook, and serve up a variety of tasty orders before the baying customers storm out in a huff. 
        
        Overcooked 2 is a chaotic co-op cooking game for 1-4 players in which you must serve a variety of recipes including sushi, pasta, cakes, burgers, and burritos to hungry customers in a series of unconventional kitchens. 
        Whether it be a hot air balloon, a magical Wizard’s school, or even another planet, you’ll have to be ready for anything. Work solo or with up to three friends to prep orders while overcoming obstacles such as fire, collapsing floors, overbearing waiters, and of course, the classic kitchen problem of floating work surfaces.`,
        publisher: "Team17",
        platform: "PS4",
        ageRating: "E - Everyone",
        developer: "Ghost Town Games"
    },

    25: {
        id: 25,
        name: "Doraemon Story of Seasons", 
        category: "Playstation 4 Game", 
        tags: ["Simulation", "Farming"],
        genre: "Simulation", 
        price: 895,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/fhmfhj_1600x.jpg",
        fullDescription: `The story of Nobita and friends starts with a mysterious seed.

        Doraemon and Nobita come across a mysterious seed. "This might be a new species of plant!" They planted the seed right away. Surprisingly, it grows into a massive tree the moment they planted and a sudden storm comes at the same time. Nobita and friends are taken in by the sky and swept away somewhere...

        Nobita and friends soon arrived at the foot of a peculiar, huge tree. They have lost their secret gadgets through the storm and unable to return to their world, completely helpless.

        Suddenly they met a boy named Launch, who is kind-hearted and told them the "Season Town" is where they are in.

        Soon after, at the suggestion of Launch, Nobita and friends decide to live in the said town. Having yet figured their way out, they lend helping hands to its residents.

        Shizuka-chan helps out at the hospital, Suneo serves at the restaurant, Gian is in-charge at the carpenter, Doraemon as the mayor’s assistant, and Nobita supports Launch in attending the ruined ranch.

        With the help of Doraemon and friends, the residents of the town as well, Nobita must bring growth to a ruined ranch.`,
        publisher: "Bandai Namco",
        platform: "PS4",
        ageRating: "E - Everyone",
        developer: "Marvelous, Brownies Studios"
    },  

    26: {
        id: 26,
        name: "Call of Duty Modern Warfare Standard Edition",
        category: "Playstation 4 Game",
        tags: ["FPS", "Multiplayer"],
        genre: "Shooter",
        price: 1795,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/ps4-cod-modern-warfare-_r2_-cover.jpg",
        fullDescription: `Prepare to go dark, Modern Warfare is back!

        The stakes have never been higher as players take on the role of lethal Tier One operator in a heart-racing saga that will affect the global balance of power. Call of Duty®: Modern Warfare® engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war. Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic Modern Warfare series from the ground up.

        In the visceral and dramatic single-player story campaign, Call of Duty: Modern Warfare pushes boundaries and breaks rules the way only Modern Warfare can. Players will engage in breathtaking covert operations alongside a diverse cast of international special forces throughout iconic European cities and volatile expanses of the Middle East.

        And the story doesn’t end there.

        In Call of Duty: Modern Warfare, players will be thrust into an immersive narrative spanning the entire game. Players can experience the ultimate online playground with classic multiplayer or squad-up and play cooperatively in a collection of elite operations, accessible to all skill levels.`,
        publisher: "Activision",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Infinity Ward"
    },

    27: {
        id: 27,
        name: "Call of Duty Infinite Warfare",
        category: "Playstation 4 Game",
        tags: ["FPS", "Multiplayer"],
        genre: "Shooter",
        price: 1295,
        rating: "★★☆☆☆",
        image: "Product Images/Playstation/PS4/ps4-call-of-duty-infinite-warfare.webp",
        fullDescription: `Infinite Warfare delivers three unique game modes: Campaign returns to the gritty, large-scale war roots of the franchise, while boldly looking ahead. Multiplayer delivers the future of warfare, with many new gameplay innovations. And the cooperative Zombies mode takes players on a wild ride through a new storyline with unique gameplay features and mechanics.

        RETURN TO CLASSIC, LARGE-SCALE WAR - Call of Duty: Infinite Warfare will take players on an unforgettable journey as they engage in battles from Earth to beyond our atmosphere against a relentless, enemy faction that threatens our very way of life

        A CALL OF DUTY CAMPAIGN TO REMEMBER - Call of Duty Infinite Warfare puts storytelling front and center, in a deeply engaging narrative. It features jaw-dropping set-pieces and blockbuster cinematic moments, while also delivering a gripping portrayal of war that harkens back to the roots of the franchise

        FIGHTING A FANATICAL ENEMY - The Settlement Defense Front (SetDef) represents a splinter group of insurgents that broke away from the United Nations Space Alliance during a war of secession, years ago. In the world of Call of Duty: Infinite Warfare, our planet has been stripped of its natural assets through population growth and industrial expansion

        GEAR UP FOR INTENSE MULTIPLAYER - Call of Duty Infinite Warfare will feature an evolution of Call of Duty’s movement system with an emphasis on front-line engagement. Maps are designed to further leverage the movement system and immerse players into fast, fun, and frenetic gameplay that players have come to expect from Call of Duty

        BATTLE THE LIVING DEAD IN A ZOMBIES THRILLER - Infinity Ward introduces a fresh take on the nightmarish Zombies mode in Call of Duty: Infinite Warfare. With an all-new, immersive zombies storyline for players to uncover and explore, players are thrust into a spine tingling adventure not for the faint of heart. The new zombies experience will take players on a wild ride with a multitude of new features, while thrilling players with the core mechanics that fans have come to expect from the mode`,
        publisher: "Activision",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Infinity Ward"
    },

    28: {
        id: 28,
        name: "Call of Duty Modern Warfare Remastered",
        category: "Playstation 4 Game",
        tags: ["FPS", "Multiplayer"],
        genre: "Shooter",
        price: 1195,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/ps4-call-of-duty-modern-warefare-remastered-r2-cover.jpg",
        fullDescription: `One of the most critically-acclaimed games in history, Call of Duty: Modern Warfare is back, remastered in true high-definition, featuring improved textures, physically based rendering, high-dynamic range lighting and much more. Developed by Infinity Ward, the award-winning Call of Duty® 4: Modern Warfare® set a new standard upon its release for intense, cinematic action while receiving universal praise as one of the most influential video games of all-time.

        Relive one of the most iconic campaigns in history, as you are transported around the globe, including fan favorite missions "All Ghillied Up," "Mile High Club," and "Crew Expendable." You’ll suit up as unforgettable characters Sgt. John "Soap" MacTavish, Capt. John Price and more, as you battle a rogue enemy group across global hotspots from Eastern Europe and rural Russia, all the way to the Middle East. Through an engaging narrative full of twists and turns, call on sophisticated technology and superior firepower as you coordinate land and air strikes on a battlefield where speed and accuracy are essential to victory.

        Additionally, team up with your friends in the online mode that redefined Call of Duty by introducing killstreaks, XP, Prestige and more in customizable, classic multiplayer modes.`,
        publisher: "Activision",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Infinity Ward"
    },

    29: {
        id: 29,
        name: "Tiny Tina's Wonderland",
        category: "Playstation 4 Game",
        tags: ["FPS", "CO-OP"],
        genre: "Shooter",
        price: 3090,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/tiny-tina-wonderland-asia-ps4_1.webp",
        fullDescription: `Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry! Bullets, magic, and broadswords collide across this chaotic fantasy world brought to life by the unpredictable Tiny Tina , who makes the rules, changes the world on the fly, and guides players on their journey.

        Customize your own multiclass hero and loot, shoot, slash, and cast your way through outlandish monsters and treasure-filled dungeons on a quest to stop the tyrannical Dragon Lord. Everyone's welcome, so join the party, throw on your adventuring boots, and be Chaotic Great!

        Features: 

        AN UNPREDICTABLE FANTASY WORLD: Tiny Tina is your disorderly guide through an extraordinary tabletop realm where rules rarely apply. Explore majestic cities, dank mushroom forests, foreboding fortresses, and more, all of which are connected by a vast Overworld.

        PERSONALIZE YOUR HERO: Create your own hero with an expansive multiclass system that lets you mix and match six unique character skill trees, all with their own awesome abilities. Level up, refine your build, expand your arsenal, and become the ultimate Fatemaker.

        GUNS, SPELLS, AND MORE: Defeat evil with devastating spells, powerful guns, and unique Action Skills in frenetic first-person battles. Use your firepower to vanquish legions of enemies, including smacktalking skeletons, land-roaming sharks, and colossal bosses.

        A FANTASTICAL CAST OF CHARACTERS: Joining you for the experience are headstrong captain Valentine (Andy Samberg) and rule-obsessed robot Frette (Wanda Sykes). During your quest to defeat the Dragon Lord (Will Arnett), you'll meet a cast of lovable misfits – like a lute-wielding Bardbarian and your very own Fairy Punchfather – who bring this colorful world to life

        BAND TOGETHER IN CHAOTIC CO-OP: Enjoy the story solo or start a party with up to three friends in seamless online multiplayer or local split-screen. Share the spoils or rush to get the shiniest loot—how you play is up to you!`, 
        publisher: "2K Games",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Gearbox Software"
    },

    30: {
        id: 30,
        name: "World War Z Aftermath",
        category: "Playstation 4 Game",
        tags: ["Zombie", "Shooter"],
        genre: "Shooter",
        price: 1895,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/world-war-z-aftermath-eu-ps4.webp",
        fullDescription: `World War Z: Aftermath is the ultimate co-op zombie shooter inspired by Paramount Pictures’ blockbuster film, and the next evolution of the original hit World War Z that has now captivated over 15 million players. Turn the tide of the zombie apocalypse on consoles and PC with full cross-play. Join up to three friends or play on your own with AI teammates against hordes of ravenous zombies in intense story episodes across new zombie-ravaged locations around the world. Take back Vatican City in an epic confrontation in Rome, and join forces with survivors in Russia’s snowbound Kamchatka peninsula.

        World War Z: Aftermath also includes all content from the Game of the Year Edition of World War Z.

        New Stories From a World at War:
        Take back Vatican City in an epic confrontation in Rome, and join forces with survivors in Russia’s snowbound Kamchatka peninsula in all-new story missions. Play as both new and returning characters as you take the fight to the undead with a brutal new melee system, decimating zekes with unique moves, perks and dual-wield weapon options like the sickle and cleaver. Fend off new undead monstrosities, including swarms of flesh-hungry rats that will unleash total chaos on your team.

        The Next Generation of the Zombie Swarm:
        Play in glorious 4K|60 FPS. Endure endless waves of increasingly difficult zombies in the new Horde Mode XL game mode, featuring hundreds more zombies on screen than ever before possible. Horde Mode XL will arrive in a free post-launch update on PS5.

        Deep Progression and a New Perspective: 
        Experience a heart-pounding new perspective with Aftermath’s immersive new First-Person Mode option. Level up eight unique classes — the Gunslinger, Hellraiser, Slasher, Medic, Fixer, Exterminator, Dronemaster, and all-new Vanguard class — each with their own perks and playstyles. Customize your weapons to survive any challenge, and conquer new daily missions with special modifiers for bonus rewards.`,
        publisher: "Mad Dog Games, LLC",
        platform: "PS4",
        ageRating: "M - Mature",
        developer: "Saber Interactive"
    },

    31: {
        id: 31,
        name: "Winter Games 2023",
        category: "Playstation 4 Game",
        tags: ["Sports"],
        genre: "Sports",
        price: 790,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS4/ps4-winter-games-2023-_r2_-1.jpg",
        fullDescription: `Winter Games 2023 is an exciting sports game in a modern 3D guise. The player can prove his/her athletic abilities in ten dynamic winter sports disciplines, for example, ski jumping, biathlon, ski cross, skeleton, or super-G. Set off on the hunt for records, best times, and trophies. Besides the individual disciplines there are also ready-to-play cups to choose from in which several disciplines can be played one after the other, and customized competitions you can put together yourself. Play alone against AI or compete in local multiplayer mode against up to three friends in an exciting winter sports duel.`,
        publisher: "Wild River Games GmbH, EuroVideo Medien",
        platform: "PS4",
        ageRating: "E - Everyone",
        developer: "Independent Arts Software",
    },
    
    32: {
        id: 32,
        name: "NBA 2K26",
        category: "Playstation 4 Game",
        tags: ["Sports"],
        genre: "Sports",
        price: 4190,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS4/playstation-ps4-nba-2k26_1.jpg",
        fullDescription: `Bragging rights are on the line in NBA 2K26. Build your legend in MyCAREER, collect and compete with stars in MyTEAM, and make executive decisions in MyNBA on PS5 or MyLEAGUE on PS4®.

        YOUR TEAM, YOUR STORY:

        Write the next chapter of an NBA franchise as a General Manager in MyNBA on PS5, or MyLEAGUE on PS4. Influence the future of the sport and leave an indelible mark on the league.

        Play Now, MyNBA, The W, and MyLEAGUE are available offline. All other game modes and features require Internet connection and may require online account registration (varies 13+).

        Features:

        POWERED BY ProPLAY™ - Dominate every possession with immersive technology that directly translates NBA footage into realistic gameplay on PS5®. Feel more connected to every dribble and crossover, and move with freedom as you unleash dynamic playmaking using all-new features.

        SQUAD UP AND WIN - Build a MyPLAYER that transcends the game in MyCAREER and rise from a budding prospect to a global superstar. Take over stunning environments where you can team up with friends and challenge rival squads for bragging rights.

        UNITE STARS IN MyTEAM - Collect and compete with past and present legends of the game in MyTEAM. Assemble a star-studded roster, test your dream team in single-player and multiplayer modes, and acquire new cards to make your MyTEAM fantasy a reality.`,
        publisher: "2K Games",
        platform: "PS4",
        ageRating: "E - Everyone",
        developer: "Visual Concepts"
    },
    
    33: {
        id: 33,
        name: "NBA 2K26",
        category: "Playstation 4 Game",
        tags: ["Sports"],
        genre: "Sports",
        price: 4190,
        rating: "★☆☆☆☆",
        image: "Product Images/Playstation/PS4/ps4-nba-2k25_1_1.webp",
        fullDescription: `Stack wins, raise banners, and make history in NBA 2K25. Command every court with authenticity and realism Powered by ProPLAY, giving you ultimate control over how you compete. Play anywhere, as you define your legacy in MyCAREER, MyTEAM, MyNBA, and The W. Express your personality with an extensive array of customization options and explore an all-new City, where opportunity awaits behind every door.

        POWERED BY ProPLAY
        Bring your game to life with ProPLAY, immersive technology that directly translates NBA footage into engaging gameplay. Get up close and personal with your favorite NBA superstars and immerse yourself in clutch moments, as ProPLAY powers the most authentic NBA experience to date.

        COMPETE IN THE CITY
        The City is the ultimate proving ground; hit the park for some competitive streetball fun and compete at various new venues. Pay homage to legends of the game in MyCAREER as you eclipse their milestone achievements and usher in the greatest dynasty basketball has ever seen. Let your talents shine in a bustling City and etch your name among the greats.

        BUILD YOUR DYNASTY
        Build a dynasty that transcends eras and redefine what it means to be the best as a General Manager in MyNBA. Explore the unique challenges that come with overseeing an NBA front office and cherish the ultimate reward of winning a championship, or multiple. Choose from six Eras, including an all-new Era, and become the next mastermind to change the game forever.`,
        publisher: "2K Games",
        platform: "PS4",
        ageRating: "E - Everyone",
        developer: "Visual Concepts"
    },

    34: {
        id: 34,
        name: "The World Ends With You",
        category: "Playstation 4 Game",
        tags: ["Strategy", "Stylized"],
        genre: "Strategy",
        price: 1095,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS4/01_2a614ebe-9256-420b-97d6-9fe45843c27b_1600x.webp",
        fullDescription: `"Only the possibility of you can change our fate"

        A long-awaited new story inThe World Ends with Youseries has finally arrived!

        Rindo comes to the grim realization that his life is on the line when he is forced to compete in the so-called "Reapers' Game." There's no telling how this tale will unfold—but it's up to you to find out! Put your psychic prowess to the test as you duke it out on the stylishly animated streets of Shibuya.`,
        publisher: "Square Enix",
        platform: "PS4",
        ageRating: "T - Teen",
        developer: "Square Enix, Jupiter"
    },
// PS5 Games
    35: {
        id: 35,
        name: "[PRE ORDER] Yakuza Kiwami 3 & Dark Ties",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["Action", "Open World"],
        genre: "Action",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/ps5-yakuza-kiwami-3-_-dark-ties-1.jpg",
        fullDescription: `The tales of two yakuza legends reborn.

        Originally debuting on PlayStation 3 in 2009, Yakuza 3 has been reimagined with cutting-edge visuals and modern technology. This evolved edition brings Okinawa to life, featuring more intense battles, added cutscenes that bring depth to the story, and minigames chock-full of replay value. Kiryu's back in the brawl, continuing the fight to protect those he holds dear.

        This title also includes Dark Ties, which stars Yoshitaka Mine, Kiryu's adversary.
        Follow Mine on his journey from working as a venture company's founder to becoming a full-fledged yakuza member. After losing everything, Mine sets off in an attempt to form a connection that would fill the void in his heart.

        Kazuma Kiryu and Yoshitaka Mine live in different ways.
        Walk alongside them as their paths intersect, throwing both of their fates in the balance.

        Yakuza Kiwami 3:
        When the peace is shattered,
        the Dragon of Dojima makes his return.

        After the Omi Alliance conflict, Kazuma Kiryu leaves the Tojo Clan in Daigo Dojima's hands and moves to Okinawa with Haruka. There, he spends his days running Morning Glory, an orphanage tied to his foster father, Shintaro Kazama.

        However, a government-sponsored resort deal threatens his newfound peace. Morning Glory is caught in the crossfire, a Tojo Clan succession dispute erupts, and a conspiracy engulfs the political world.

        When the maelstrom of conflicts converges, Kiryu steps into the fray once more.

        Dark Ties:
        The year is 2007.
        Yoshitaka Mine is the successful founder of a startup company, but he loses everything when his colleagues stab him in the back.
        Wandering aimlessly through Kamurocho, he witnesses a gruesome conflict between yakuza.

        The sight of the subordinates sacrificing themselves for their boss was everything Mine had been longing for—a bond that transcended material gain. The survivor of this assault is Daigo Dojima, the sixth chairman of Japan's largest yakuza clan.
        Hoping to find such a bond himself, Mine decides to acquaint himself with Tsuyoshi Kanda, a Tojo clan lieutenant.

        Witness Yoshitaka Mine's story, from his first steps into the criminal underworld to his ascent through the ranks of the Tojo Clan.`,
        publisher: "SEGA",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Ryu Ga Gotoku Studio"
    },

    36: {
        id: 36,
        name: "[PRE ORDER]Code Vein II Standard Edition",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["Action", "Souls-like"],
        genre: "Action",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/ps5-code-vein-ii---collector-edition-r3-1.webp",
        fullDescription: `In a future world where humans and Revenants coexist...
        Due to the sudden appearance of the Luna Rapacis, Revenants have transformed into mindless monsters called Horrors. As a Revenant hunter, the player shall halt the world's inevitable collapse by traveling to the past with a girl called Lou who possesses the power to manipulate time.

        An epic adventure awaits, where you and your chosen partners explore a vast world, face fierce battles against powerful enemies, and uncover an epic story that transcends time.`,
        publisher: "BANDAI NAMCO Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "BANDAI NAMCO Studios"
    },

    37: {
        id: 37,
        name: "[PRE ORDER]Nioh 3 Standard Edition", 
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["Action", "Souls-like"],
        genre: "Action",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/ps5-nioh-3-standard-edition-r3-1.webp",
        fullDescription: `Overcome difficult challenges in an open field.This game is set in an open field, in which players can freely explore, while enjoying the unique tension that accompanies all "Nioh" titles. Face formidable encounters with powerful yokai, explore villages where suspicious beings lurk, take on the daunting challenges of The Crucible, and enjoy the thrilling, hostile new environments as you fight to survive the cursed kingdom!`,
        publisher: "Koei Temco Games",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Team Ninja"
    },

    38: {
        id: 38,
        name: "Marvel's Spider-Man 2",
        category: "Playstation 5 Game",
        tags: ["Action", "Open World"],
        genre: "Action",
        price: 3490,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5_marvel_s_spider-man_2-1.webp",
        fullDescription: `An evolution of the Spider-Man story

        The incredible power of the symbiote forces Peter and Miles to face the ultimate test of strength, both inside and outside the mask, as they balance their lives, friendships, and their duty to protect those in need.

        Experience two playable Spider-Men

        Quickly swap between both Spider-Men as you explore an expanded Marvel’s New York.

        Experience Peter’s new symbiote abilities and Miles’ explosive bio-electric venom powers, and discover upgradeable, high-tech equipment that enhances the combat experience for extensive gameplay depth and variety.

        Battle iconic Marvel Super Villains

        Fight against a variety of new and iconic villains, including an original take on the monstrous Venom, the ruthless Kraven the Hunter, the volatile Lizard, and many more!

        Visit an expanded Marvel’s New York

        Explore a larger Marvel’s New York than ever before, featuring two new boroughs – Brooklyn and Queens – as well as locations like Coney Island.`,
        publisher: "Sony Interactive Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Insomiac Games"  
    },

    39: {
        id: 39,
        name: "Cyberpunk 2077 Ultimate Edition", 
        category: "Playstation 5 Game",
        tags: ["Action", "Open World"], 
        genre: "Action",
        price: 3150,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5_g._cyberpunk_2077_ultimate_edition_r2_.webp",
        fullDescription: `In the Ultimate Edition, immerse yourself in every story the world of the dark future has to offer, featuring every gameplay update and all previously released content in one package - including the acclaimed spy-thriller expansion Phantom Liberty.`,
        publisher: "CD Projekt",
        platform: "PS5", 
        ageRating: "M - Mature",
        developer: "CD Projekt Red",
    },

    40: {
        id: 40,
        name: "Elder Scrolls IV: Oblivion Remastered - Deluxe Edition",
        category: "Playstation 5 Game",
        tags: ["Adventure", "Open World"],
        genre: "Adventure",
        price: 2495,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-elder-scrolls-iv-oblivion-deluxe-ed-_r1_-1.jpg",
        fullDescription: `A remastered classic RPG set in the vast open world of Cyrodiil. 
        
        Experience enhanced visuals, smoother performance, and all deluxe content as you forge your destiny in a realm filled with magic, danger, and unforgettable quests.`,
        publisher: "Bethesda Studios",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Bethesda Studios"
    },

    41: {
        id: 41,
        name: "Black Myth: Wukong Deluxe Edition",
        category: "Playstation 5 Game",
        tags: ["Adventure"],
        genre: "Adventure",
        price: 3595,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/black-myth-wukong-_ps5_-t-front-cover-deluxe-ed-upgrade_2_1.webp",
        fullDescription: `Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.

        Features:

        Explore a Land of Vast Wonders - A world unseen, where new sights rise with every stride. Enter a fascinating realm filled with the wonders and discoveries of ancient Chinese mythology!

        Confront Mighty Foes, Old and New - Heroic Monkey, might and fame, adversaries rise, to test his name. One of the major highlights of Journey to the West is its diverse cast of adversaries, each with unique strengths.

        Temper Your Mastery of Varied Spells - Spells unbound, knowledge's flight, infinite abilities take their height. Spells, transformations, and magic vessels in all manifestations, complementary yet adversarial, have long been iconic combat elements of Chinese mythology.

        Discover Heartfelt Tales Behind Every Facade - Within beings of every kind lies the story of a life. Beneath the ferocity and craftiness of your foes lies an engaging tapestry of their origins, personalities, and motivations waiting to be revealed.`,
        publisher: "Game Science",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Game Science"
    },

    42: {
        id: 42,
        name: "Assassin's Creed Shadows",
        category: "Playstation 5 Game",
        tags: ["Adventure", "Open World"],
        genre: "Adventure",
        price: 3795,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS5/assassins-creed-shadows-special-edition_1_1_2.jpg",
        fullDescription: `A NEW CREED RISES

        Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful African samurai of historical legend. Against the backdrop of the turbulent late Sengoku period, this remarkable duo will discover their common destiny as they usher in a new era for Japan.

        FEATURES:

        EXPLORE FEUDAL JAPAN - Discover the captivating open world of feudal Japan, from spectacular castle towns and bustling ports to peaceful shrines and pastoral landscapes. Adventure through unpredictable weather, changing seasons, and reactive environments

        BECOME A SHINOBI ASSASSIN - As the quick-witted and agile Naoe, use noise, light, and shadows to evade detection as enemies respond to their changing surroundings. Distract guards using kunai, shuriken, and smoke bombs, infiltrate enemy bases with your grappling hook and parkour skills, and assassinate your targets with the hidden blade

        BECOME A LEGENDARY SAMURAI - As the charismatic samurai Yasuke, strike your foes with brutal precision and power. Use his combat-oriented skills to attack, block, parry, and defeat your enemies. Master the vast arsenal of weapons at your disposal – featuring katana, kanabo, bows, naginata, and more – to free Japan from its oppressors

        INFORMATION IS YOUR WEAPON - Travel the world, explore, and scout your surroundings to gather vital intel. Build your network of spies to be your eyes and ears across locations to unveil new areas and hunt down your next target. Along the way, recruit several allies with highly specialized skills and abilities to help accomplish your missions

        PLAY IT YOUR WAY - You decide whether to play as a shinobi or samurai. Master complementary playstyles of two fully realized protagonists, approach quests with whichever character you prefer, as each possesses their own respective progression, stats, skills, and gear`,
        publisher: "Ubisoft",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Ubisoft Quebec"
    },

    43: {
        id: 43,
        name: "Minecraft",
        category: "Playstation 5 Game",
        tags: ["Adventure", "Open World"],
        genre: "Adventure",
        price: 1395,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5_minecraft_r1_.webp",
        fullDescription: `Explore randomly‐generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in Creative Mode with unlimited resources or mine deep into the world in Survival Mode, crafting weapons and armour to fend off dangerous mobs.

        Create, Explore and Survive alone or with up to 8 'crafters together online, while 4 can join each other in local multiplayer on the TV or in tabletop mode, supporting both split screen and the Pro Controller. Compete with your friends in Battle, Tumble or Glide - mini-games for Minecraft console editions where you fight for survival and high scores; strategy, and sometimes just pure luck will make you the winner.`,
        publisher: "Mojang Studios",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Mojang Studios" 
    },

    44: {
        id: 44, 
        name: "Horizon Zero Dawn Remastered",
        category: "Playstation 5 Game",
        tags: ["Adventure", "Open World"],
        genre: "Adventure",
        price: 2490,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/playstation_ps5_horizon_zero_dawn_remastered_1.webp",
        fullDescription: `In an era where Machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny.

        In a lush, post-apocalyptic world where nature has reclaimed the ruins of a forgotten civilization, pockets of humanity live on in primitive hunter-gatherer tribes. Their dominion over the new wilderness has been usurped by the Machines – fearsome mechanical creatures of unknown origin.`,
        publisher: "Sony Interactive Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Guerrilla Games"
    },

    45: {
        id: 45,
        name: "Dragon Ball: Sparking Zero",
        category: "Playstation 5 Game",
        tags: ["Fighting", "Anime"],
        genre: "Fighting",
        price: 2995,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5-dragonball-sparking-zero-r2-cover_1.jpg",
        fullDescription: `Shake the earth. Break the heavens. Make yours the destructive power of the strongest fighters ever to appear in DRAGON BALL!

        DRAGON BALL: Sparking! ZERO takes the legendary gameplay of the Budokai Tenkaichi series and raises it to whole new levels. DRAGON BALL: Sparking! ZERO has an incredible number of playable characters, each with signature abilities, transformations, and techniques. Unleash the fighting spirit within you and take the fight to arenas that crumble and react to your power as the battle rages on.

        Features:

        BREATHTAKING 3D FIGHTS - Engage in heart-pounding, high-speed 3D battles that stay true to the anime and video game series, with breathtaking visuals and authentic combat moves like beam clashes, rush attacks, movements too quick for the eyes to see, and planet-razing ultimate attacks
        THE GROUND WILL SHAKE - Step into an arena that reacts to your every action. As you transform or unleash your most devastating attacks, watch the environment respond with stunning realism. Leave a trail of destruction in your wake as you battle to your heart’s content`,
        publisher: "Bandai Namco Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Spike Chunsoft"
    },
     
    46: {
        id: 46,
        name: "Tekken 8 Standard Edition",
        category: "Playstation 5 Game",
        tags: ["Fighting", "Multiplayer"],
        genre: "Fighting",
        price: 2795,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/tekken-8-ps5_1.jpg",
        fullDescription: `TEKKEN 8, the brand-new entry in the legendary TEKKEN franchise, brings the fight to the new generation!

        A Fighter for a New Generation:

        Powered by Unreal Engine 5 and exclusively available on PS5, TEKKEN 8 pushes the limits of new-gen hardware and technologies. The game features high-definition character models built from the ground up with high-fidelity skin and hair, along with immersive graphics such as muscles that shift to reflect character movement.

        New Game, New Rivalry:
        The TEKKEN series holds the record of being the longest-running story in a video game franchise. Just as the ending dialogue of Tekken 7 mentioned, this new entry will focus on the father-and-son showdown between Kazuya Mishima and Jin Kazama.

        New Game, New Rivalry - This latest saga begins with Jin Kazama meeting Kazuya Mishima in a city-shattering face-to-face showdown

        Exciting New Gameplay - The latest entry in the series introduces an all-new game mechanic called the ”Heat System,” giving players the ability to harness aggressiveness as a tactic and incorporate offensive attacks into their playstyle, with special movements and enhancement of character ability based on each character’s unique features.

        An Emotional Return - After more than 25 years away, Jun Kazama joins TEKKEN 8 as a playable character!
        Iconic characters announced - Include Paul Phoenix, Marshall Law, King, Lars Alexandersson as well as Jack-8`,
        publisher: "Bandai Namco Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Bandai Namco Studios, Arika"
    },

    47: {
        id: 47,
        name: "Mortal Kombat 1",
        category: "Playstation 5 Game",
        tags: ["Fighting", "Multiplayer"],
        genre: "Fighting",
        price: 2295,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/mortal_kombat_1_ps5_-_standard_edition_edition.webp",
        fullDescription: `A fresh reboot of the Mortal Kombat series featuring a new universe, improved visuals, and brutal, fast-paced combat.`,
        publisher: "WB Games",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "NetherRealm Studios"
    },

    48: {
        id: 48,
        name: "Undisputed",
        category: "Playstation 5 Game",
        tags: ["Fighting", "Boxing"],
        genre: "Fighting",
        price: 3295,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5_undisputed_1.webp",
        fullDescription: `Become Undisputed and rule the ring! Featuring true to life visuals, bone-jarring action, and more licensed boxers than ever before, Undisputed gives you unprecedented control to master every inch of the ring.`,
        publisher: "Deep Silver",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Steel City Interactive",
    },
    
    49: {
        id: 49,
        name: "Naruto x Boruto Ultimate Ninja Storm Connections",
        category: "Playstation 5 Game",
        tags: ["Fighting", "Anime"],
        genre: "Fighting",
        price: 1995,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-naruto-x-boruto-ultimate-ninja-storm-connections-cover.jpg",
        fullDescription: `Legendary ninjas reunite!

        Celebrate the 20th anniversary of Naruto’s anime debut with NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS, the next entry in the blockbuster Ultimate Ninja STORM series!`,
        publisher: "Bandai Namco Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "CyberConnect2 Co., Ltd."
    },

    50: {
        id: 50,
        name: "Sonic Racing CrossWorlds",
        category: "Playstation 5 Game",
        tags: ["Racing", "Multiplayer"],
        genre: "Racing",
        price: 2999,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5-sonic-racing-crossworlds_2.webp",
        fullDescription: `Race across land, sea, air, space, and time in Sonic Racing: CrossWorlds! Warp through Travel Rings into new dimensions where something new awaits around every twist and turn. Speed to victory solo or as a team in a variety of offline and online modes and compete against players from around the world. Build the ultimate machine to match your racing style, unlock gadgets to gain the upper hand, and unleash power-up items for the win!`,
        publisher: "SEGA",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Sonic Team"
    },

    51: {
        id: 51,
        name: "Asphalt Legends Unite Supercharged Edition",
        category: "Playstation 5 Game",
        tags: ["Racing", "Multiplayer"],
        genre: "Racing",
        price: 2095,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS5/ps5_g._asphalt_legends_unite_supercharged_ed._us__1.webp",
        fullDescription: `ASPHALT LEGENDS UNITE: SUPERCHARGED EDITION

        The latest entry in the long-running series, Asphalt Legends UNITE puts you behind the wheel of the world's most powerful cars to race through breathtaking landscapes. Build up your own garage from 250+ hypercars and build your legend, solo or united, versus or co-op.

        Get ready to rev your engines and dominate the streets like never before in Asphalt Legends UNITE: Supercharged Edition! Prepare for an unparalleled gaming experience with the top-dollar luxury DLC bundle, featuring a fleet of high-caliber cars that are the epitome of performance.

        Start the game with 5 extra hypercars waiting in your garage from D to S class, as well as an elite A class: the Lamborghini Countach LPI 800-4 (***) and a bank of tokens and credits to get a rolling start.

        PlayStation players who buy this edition will also receive an exclusive livery to customize their Lamborghini Countach LPI 800-4.`,
        publisher: "Gameloft, Maximum Entertainment",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Gameloft Barcelona"
    },

    52: {
        id: 52,
        name: "MotoGP 24",
        category: "Playstation 5 Game",
        tags: ["Racing"],
        genre: "Racing",
        price: 1495,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-motogp-24-1_1.webp",
        fullDescription: `Experience the thrill of the 2024 MotoGP season! 
        Race all official riders, teams, and tracks with realistic physics, immersive career mode, and online multiplayer. 
        
        Master every turn, push your limits, and become the ultimate MotoGP champion.`,
        publisher: "Milestone S.r.l.",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Milestone S.r.l."
    },

    53: {
        id: 53,
        name: "Need for Speed Unbound",
        category: "Playstation 5 Game",
        tags: ["Racing"],
        genre: "Racing",
        price: 1095,
        rating: "★★☆☆☆",    
        image: "Product Images/Playstation/PS5/playstation_ps5_need_for_speed_unbound_r2_.webp",
        fullDescription: `Race against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore's ultimate street racing challenge. Pack your garage with precision-tuned, custom rides and light up the streets with your style, exclusive fits, and a vibrant global soundtrack that bumps in every corner of the world.

        The world is your canvas in Need for Speed™ Unbound. Prove you have what it takes to win The Grand, Lakeshore’s ultimate street racing challenge. Across four intense weeks of racing, earn enough cash to enter weekly qualifiers, beat the competition, and make your mark on the street racing scene while outdriving and outsmarting the cops. Pack your garage with precision-tuned, custom rides and light up the streets with your unique style, exclusive fits, and a vibrant global soundtrack that bumps in every corner of the world. Express yourself to the fullest with the freshest new art styles and signature tags that represent what you're all about. With separate single and multiplayer campaigns, this latest edition in the Need for Speed™ franchise from Criterion Games™ delivers hours of electric, adrenaline-pumping action.`,
        publisher: "Electronic Arts",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Criterion Games"
    },
    
    54: {
        id: 54,
        name: "[PRE ORDER]Project Motor Racing",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["Racing"],
        genre: "Racing",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/ps5-project-motor-racing-r3-1.webp",
        fullDescription: `Why Drive … When you can RACE

        Project Motor Racing ignites all the passion, beauty, and intensity of professional motorsport. Race across eras in 70+ iconic cars across 10 definitive racing classes in intense Single Player Career and Online Racing Modes.

        Feel every second with a new, benchmark-setting physics engine built on the mod-friendly GIANTS Engine 10 that delivers unmatched handling realism and high-fidelity FFB.

        Experience “living” cockpits with visible G-forces, dirt, heat-haze, and then feel the precision of “True2Track” on 27 scanned track layouts, all with Dynamic Weather Conditions, Adaptive Racing & Drying Line, and a full 24-hour day/night cycle.`,
        publisher: "Giants Software",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Straight4 Studios"
    },

    55: {
        id: 55,
        name: "Trails in the Sky 1st Chapter",
        category: "Playstation 5 Game",
        tags: ["Role Playing", "JRPG"],
        genre: "Role Playing",
        price: 3195,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5-trails-in-the-sky-1st-chapter-1.jpg",
        fullDescription: `Brace yourself for adventure! This beloved classic follows Estelle Bright and her adoptive brother, Joshua, as they begin their journey to become senior bracers. What starts as a simple mission grows into a
        battle against a mysterious organization threatening their homeland. As they uncover hidden conspiracies, Estelle and Joshua face increasing dangers that test their courage and strengthen their bond.`,
        publisher: "Xseed Games",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Nihom Falcom"
    },

    56: {
        id: 56, 
        name: "Digimon Story Time Stranger - Standard Edition",
        category: "Playstation 5 Game",
        tags: ["JRPG", "Anime"],
        genre: "Role Playing",
        price: 3150,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5-digimon-story-time-stranger---standard-edition-r3-4_2.jpg",
        fullDescription: `Embark on a mysterious adventure with your Digimon partners as you uncover the secrets behind the “Time Stranger” phenomenon. Train, battle, and evolve your Digimon in a story-driven RPG filled with exploration, quests, and strategic combat.`,
        publisher: "Bandai Namco Entertainment",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Media.Vision Inc."
    },

    57: {
        id: 57,
        name: "[PRE ORDER]Dragon Quest I & II HD-2D Remake Standard Edition",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["JRPG", "Adventure"],
        genre: "Role Playing",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/playstation_ps5_dragon_quest_i_ii_hd-2d_remake_1.webp",
        fullDescription: `DRAGON QUEST I & II HD-2D Remake is a stunning reimagination of the first two legendary adventures in The Erdrick Trilogy, brought together in one package.

        DRAGON QUEST I Story:
        Thanks to the heroic efforts of the legendary Erdrick, the Lord of the Underworld was defeated and peace returned to the land of Alefgard. Yet this peace was not to last, as the diabolical Dragonlord has risen and unleashed hordes of monsters on the realm once more. Now, descendant of Erdrick, it is your destiny to defeat this new evil and rescue the world from its plight!

        DRAGON QUEST II Story:
        Many years have passed since Alefgard was saved at the hero's hand, earning him the same title as his storied forebear. The descendants of this Erdrick and his scions founded three kingdoms that thrived in peacetime. Yet, darkness stirs once more and a sudden invasion of malicious monsters plunges the world into shadow again. All that stands between the forces of evil and their wicked ambitions is a band of young princes and princesses of Erdrick's lineage. The time has come for them to venture forth and honor their ancestor's legacy!`,
        publisher: "Square Enix",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Square Enix, ARTDINK",
    },

    58: {
        id: 58,
        name: "Kingdom Come Deliverance II Gold Edition",
        category: "Playstation 5 Game",
        tags: ["RPG", "Medieval"],
        genre: "Role Playing",
        price: 3295,
        rating: "★★★★★",
        image: "Product Images/Playstation/PS5/ps5_kingdom-come-ii-deliverance-gold-ed-_r1_-1.jpg",
        fullDescription: `Kingdom Come: Deliverance II is a thrilling Action RPG, set amid the chaos of a civil war in 15th Century Bohemia. You are Henry of Skalitz – an ordinary man doing extraordinary things – caught in a gripping tale of revenge, betrayal, and discovery as he embarks on an epic journey, 'from a humble blacksmith's forge to the court of Kings', as he searches for purpose in this beautiful but brutal medieval world. From bustling city streets to lush forests, discover this open-world Medieval Europe through an unforgettable adventure filled with action, thrill, and wonder.

        Kingdom Come: Deliverance II [Gold Edition] includes:

        - Base Game
        - Expansion Pass
        - Gallant Huntsman’s Kit`,
        publisher: "Deep Silver",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Warhorse Studios ",
    },

    59: {
        id: 59, 
        name: "[PRE ORDER]Octopath Traveler 0 - Standard Edition",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["JRPG", "Adventure"],
        genre: "Role Playing",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/playstation-ps5-octopath-traveler-0-1.jpg",
        fullDescription: `Start from zero and discover the newest entry in the OCTOPATH TRAVELER series. Experience a story of restoration and retribution over the divine rings—an epic saga that unfolds across the realm of Orsterra.
        Enjoy familiar features such as the series' HD-2D graphics, a fusion of retro pixel art and 3DCG; the player's ability to roleplay using Path Actions of their choice; and the Break and Boost system that can turn the tide of battle. Additionally, brand-new features such as character creation and town building allow you to create your own character and restore your hometown.`,
        publisher: "Square Enix",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "DOKIDOKI GROOVE WORKS"
    },

    60: {
        id: 60, 
        name: "Harvest Moon: Home Sweet Home Special Edition",
        category: "Playstation 5 Game",
        tags: ["Farming","Casual"],
        genre: "Simulation",
        price: 2150,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-harvest-moon-home-sweet-home---special-edition-asia-1_1.webp",
        fullDescription: `Harvest Moon: Home Sweet Home Special Edition invites you to leave the city behind and return to Alba Village—a peaceful countryside town ready for a fresh start. Once lively, Alba is now in decline, but with your help, it can thrive again.

        Grow crops, care for animals, fish, and gather resources to collect Happiness and revitalize the village. Use new inventions like the Hoverbike 5000 and Cleanmeister Autovac, exclusive to the Special Edition, to make country life easier.

        Build friendships—or even romance—with a charming cast, including familiar faces and newcomers like Ella and Dr. Nikolai. Join festivals, take part in fun events, and bring life back to your hometown.

        Your home is calling. Are you ready to return?`,
        publisher: "Natsume",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "IMAGICA GEEQ Inc., Natsume Inc."
    },

    61: {
        id: 61, 
        name: "Train Sim World 5",
        category: "Playstation 5 Game",
        tags: ["Simulation", "Realistic"],
        genre: "Simulation",
        price: 1595,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5_train_sim_world_5.jpg",
        fullDescription: `THE RAILS ARE YOURS

        Takeon new challenges and new roles as you master the tracks and trains of iconic cities. Immerse yourself in the ultimate rail hobby and embark on your next journey. From sleek, tilting marvels to the grunt of mighty, modern diesels - The Rails are Yours in Train Sim World 5!

        CONDUCTOR MODE: puts you into the role of a guard/conductor on any service – check tickets, operate the doors and ensure passenger safety. Take a break between driving and master a different discipline.

        LIVE MAP: Get a real-time, birds-eye view of any route. Become familiar with station locations and find out when the next train is heading your way with detailed information.

        ROUTE HOPPING: fast-travel across routes to catch the action at any station or hop between geography-shared routes on-foot to access your collection (other route add-ons required).

        With customisation tools such as CREATORS CLUB, PHOTO MODE and more, embark on your own journey, in your own way.`,
        publisher: "Dovetail Games - TSW",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Dovetail Games"
    },

    62: {
        id: 62, 
        name: "EA Sports FC 26 - Standard Edition ",
        category: "Playstation 5 Game",
        tags: ["Football", "Simulation"],
        genre: "Simulation",
        price: 3695,
        rating: "★★☆☆☆",
        image: "Product Images/Playstation/PS5/ea-sports-fc-26--multilanguage-878743_1.jpg",
        fullDescription: `The Club is Yours in EA SPORTS FC™ 26. Play your way with an overhauled gameplay experience powered by community feedback, Manager Live Challenges that bring fresh storylines to the new season, and Archetypes inspired by greats of the game.`,
        publisher: "Electronic Arts",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "EA Canada, EA Romania"
    },

    63: {
        id: 63, 
        name: "[PRE ORDER]Slime Rancher 2",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["Simulation", "Open World"],
        genre: "Simulation",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/slimerancher2_1600x.webp",
        fullDescription: `Slime Rancher 2 is a sequel to the award-winning, smash-hit original that has been enjoyed by over 10 million fans worldwide. Continue the adventures of Beatrix LeBeau as she journeys to Rainbow Island, a mysterious land brimming with ancient technology, unknown natural resources, and an avalanche of wiggling, jiggling, new slimes to discover.

        As Beatrix attempts to unravel the island’s secrets and uncover its true purpose, she’ll build, ranch, and farm within a beautiful conservatory, whose sparkling glass walls give her full view of the prismatic paradise she now calls home.`,
        publisher: "Monomi Park ",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Monomi Park "
    },

    64: {
        id: 64, 
        name: "Farming Simulator 25",
        category: "Playstation 5 Game",
        tags: ["Simulation", "Casual"],
        genre: "Simulation",
        price: 2095,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5_farming_simulator_25.webp",
        fullDescription: `Farming Simulator 25 introduces rice cultivation, spinach, and other crops as well as new environments in East Asia, North America, and Central Europe to the family-friendly series.

        Expand your ever-growing farm empire with new animals, production chains, construction missions, and over 400 authentic machines from 150 agricultural top brands.

        Enjoy upgraded graphics & physics, making virtual farming more immersive, atmospheric and relaxing - whether you tackle agriculture, forestry and animal husbandry single-handedly or together with friends in cooperative multiplayer!`,
        publisher: "Giants Software",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Giants Software"
    },

    65: {
        id: 65, 
        name: "Call of Duty Black Ops 7",
        category: "Playstation 5 Game",
        tags: ["FPS", "Multiplayer"],
        genre: "Shooter",
        price: 3895,
        rating: "★☆☆☆☆",
        image: "Product Images/Playstation/PS5/ps5-call-of-duty-black-ops-7-r3-1_2.webp",
        fullDescription: `Embrace the madness.

        In Call of Duty®: Black Ops 7, Treyarch and Raven Software are bringing players the most mind-bending Black Ops ever. The year is 2035 and the world is on the brink of chaos, ravaged by violent conflict and psychological warfare following the events of the fan-favorite titles Black Ops 2 and Black Ops 6. Wielding cutting-edge technology, the Black Ops team led by David Mason must fight back against a manipulative enemy who weaponizes fear above all else.

        Squad up with friends or play solo in a thrilling and innovative Co-op Campaign, harness near-future weaponry in a signature Multiplayer experience packed with brand-new maps, and descend into the next twisted chapter of Round-Based Zombies in the heart of the Dark Aether.`,
        publisher: "Activision",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Treyarch, Raven Software"
    },

    66: {
        id: 66, 
        name: "Battlefield 6",
        category: "Playstation 5 Game",
        tags: ["FPS", "Multiplayer"],
        genre: "Shooter",
        price: 3850,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-battlefield-6-standard_edition-r3-1_2.jpg",
        fullDescription: `The ultimate all-out warfare experience. Fight in high-intensity infantry combat. Rip through the skies in aerial dogfights. Demolish your environment for a strategic advantage. Harness complete control over every action and movement using the Kinesthetic Combat System. In a war of tanks, fighter jets, and massive combat arsenals—the deadliest weapon is your squad. This is Battlefield 6.`,
        publisher: "Electronic Arts",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Battlefield Studios"
    },

    67: {
        id: 67, 
        name: "[PRE ORDER]S.T.A.L.K.E.R. 2: Heart of Chernobyl",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["FPS", "Survival"],
        genre: "Shooter",
        price: 500,
        rating: "No ratings yet.", 
        image: "Product Images/Playstation/PS5/ps5-stalker-2-heart-of-chernobyl-r3-1_1.webp",
        fullDescription: `Discover the vast Chernobyl Exclusion Zone full of dangerous enemies, deadly anomalies, and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chernobyl. Choose your paths wisely, as they will determine your fate and shape the future of the Zone in the end.

        S.T.A.L.K.E.R. is a critically acclaimed franchise that has millions of players exploring the hostile environment of the Chernobyl Anomalous Exclusion Zone for more than a decade. S.T.A.L.K.E.R. 2 is a long-awaited sequel to the series that aims to deliver all the fan-favorite elements — challenging combat, chilling horror, and a thrill of a fight for survival.`,
        publisher: "GSC Game World",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "GSC Game World"
    },

    68: {
        id: 68,
        name: "Borderlands 4 Standard Edition",
        category: "Playstation 5 Game",
        tags: ["Shooter", "Looter"],
        genre: "Shooter",
        price: 3250,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-borderlands-4-standard-r3_1.webp",
        fullDescription: `Borderlands 4brings intense action, badass Vault Hunters, and billions of wild and deadly weapons to an all-new planet ruled by a ruthless tyrant.

        Crash into Kairos as one of four new Vault Hunters seeking wealth and glory. Wield powerful Action Skills, customize your build with deep skill trees, and dominate enemies with dynamic movement abilities.

        Break free from the oppressive Timekeeper, a ruthless dictator who dominates the masses from on high. Now a world-altering catastrophe threatens his perfect Order, unleashing Mayhem across the planet.`,
        publisher: "2K Games",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Gearbox Software"
    },

    69: {
        id: 69, 
        name: "Sniper Elite Resistance",
        category: "Playstation 5 Game",
        tags: ["Shooter", "Stealth"],
        genre: "Shooter",
        price: 2695,
        rating: "★★★☆☆",
        image: "Product Images/Playstation/PS5/sniper-elite-resistance-cover_1.webp",
        fullDescription: `NEW OPERATIVE, NEW THREAT, NEW EPIC CAMPAIGN

        Offering unparalleled sniping mechanics, stealth and tactical third-person combat, Sniper Elite: Resistance turns the attention of the award-winning series towards a hidden war, far from the front lines, deep within the heart of occupied France.

        In a gripping new story that runs parallel with Sniper Elite 5, Harry Hawker, agent of the Special Operations Executive (SOE), takes the lead for the first time as he discovers an insidious new Wunderwaffe - something so powerful, it guarantees the Nazis will win the war.`,
        publisher: "Rebellion",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Rebellion"
    },

    70: {
        id: 70, 
        name: "NBA 2K26",
        category: "Playstation 5 Game",
        tags: ["Sports", "Basketball"],
        genre: "Sports",
        price: 4190,
        rating: "★★☆☆☆",
        image: "Product Images/Playstation/PS5/playstation-ps5-nba-2k26_2.jpg",
        fullDescription: `Bragging rights are on the line in NBA 2K26. Build your legend in MyCAREER, collect and compete with stars in MyTEAM, and make executive decisions in MyNBA on PS5 or MyLEAGUE on PS4®.

        YOUR TEAM, YOUR STORY:

        Write the next chapter of an NBA franchise as a General Manager in MyNBA on PS5, or MyLEAGUE on PS4. Influence the future of the sport and leave an indelible mark on the league.

        Play Now, MyNBA, The W, and MyLEAGUE are available offline. All other game modes and features require Internet connection and may require online account registration (varies 13+).

        Features:

        POWERED BY ProPLAY™ - Dominate every possession with immersive technology that directly translates NBA footage into realistic gameplay on PS5®. Feel more connected to every dribble and crossover, and move with freedom as you unleash dynamic playmaking using all-new features.

        SQUAD UP AND WIN - Build a MyPLAYER that transcends the game in MyCAREER and rise from a budding prospect to a global superstar. Take over stunning environments where you can team up with friends and challenge rival squads for bragging rights.

        UNITE STARS IN MyTEAM - Collect and compete with past and present legends of the game in MyTEAM. Assemble a star-studded roster, test your dream team in single-player and multiplayer modes, and acquire new cards to make your MyTEAM fantasy a reality.`,
        publisher: "2K Games ",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Visual Concepts"
    },

    71: {
        id: 71, 
        name: "Tony Hawk's Pro Skater 3 + 4 ",
        category: "Playstation 5 Game",
        tags: ["Sports", "Casual"],
        genre: "Sports",
        price: 2595,
        rating: "★★★★☆",
        image: "Product Images/Playstation/PS5/ps5-tony-hawks-pro-skater-3-plus-4-asia-cover_1.jpg",
        fullDescription: `Get hyped for the legendary return of the birdman himself in the next-gen remake of Tony Hawk’s™ Pro Skater™ 3 + 4.

        Shred the original parks with the classic roster of skaters joined by new parks, skaters, and tricks in a remake of THPS 3 + 4, featuring Career mode, cross-platform multiplayer, enhanced creation tools, New Game+, and more. Alert the neighborhood and grab your skate buddies because the shred’s not dead. It’s back and better than ever.`,
        publisher: "Activision",
        platform: "PS5",
        ageRating: "T - Teen",
        developer: "Iron Galaxy Studios"
    },

    72: {
        id: 72, 
        name: "NBA 2K25",
        category: "Playstation 5 Game",
        tags: ["Sports", "Basketball"],
        genre: "Sports",
        price: 1450,
        rating: "★★☆☆☆",
        image: "Product Images/Playstation/PS5/playstation_ps5_nba_2k25_standard_edition_-_r2_1.webp",
        fullDescription: `Stack wins, raise banners, and make history in NBA 2K25. Command every court with authenticity and realism Powered by ProPLAY, giving you ultimate control over how you compete. Play anywhere, as you define your legacy in MyCAREER, MyTEAM, MyNBA, and The W. Express your personality with an extensive array of customization options and explore an all-new City, where opportunity awaits behind every door.

        POWERED BY ProPLAY:
        Bring your game to life with ProPLAY, immersive technology that directly translates NBA footage into engaging gameplay. Get up close and personal with your favorite NBA superstars and immerse yourself in clutch moments, as ProPLAY powers the most authentic NBA experience to date.

        COMPETE IN THE CITY:
        The City is the ultimate proving ground; hit the park for some competitive streetball fun and compete at various new venues. Pay homage to legends of the game in MyCAREER as you eclipse their milestone achievements and usher in the greatest dynasty basketball has ever seen. Let your talents shine in a bustling City and etch your name among the greats.

        BUILD YOUR DYNASTY:
        Build a dynasty that transcends eras and redefine what it means to be the best as a General Manager in MyNBA. Explore the unique challenges that come with overseeing an NBA front office and cherish the ultimate reward of winning a championship, or multiple. Choose from six Eras, including an all-new Era, and become the next mastermind to change the game forever.`,
        publisher: "2K Games",
        platform: "PS5",
        ageRating: "E - Everyone",
        developer: "Visual Concepts"
    },

    73: {
        id: 73,
	    name: "Madden NFL 26",
	    category: "Playstation 5 Game",
	    tags: ["Sports", "Football"],
	    genre: "Sports",
	    price: 4150,
	    rating: "★★★★☆",
	    image: "Product Images/Playstation/PS5/ps5-madden-nfl-26-_r1_-1.jpg",
	    fullDescription: `Dominate the league in EA SPORTS™ Madden NFL 26. Years of NFL game data powers next-level coaching, QB authenticity, and explosive gameplay. Every game is a new challenge on your path to becoming an NFL legend.`,
    	publisher: "Electronic Arts",
	    platform: "PS5",
	    ageRating: "T - Teen",
	    developer: "EA Orlando"
    },

    74: {
    	id: 74,
	    name: "NHL 26 - Standard Edition",
	    category: "Playstation 5 Game",
	    tags: ["Sports", "Hockey"],
	    genre: "Sports",
	    price: 3795,
	    rating: "★★★☆☆",
	    image: "Product Images/Playstation/PS5/ps5-nhl-26-standard-edition.jpg",
	    fullDescription: `Play like a superstar in EA SPORTS NHL® 26. From NHL EDGE data powering how superstars perform in-game to a reimagined Be A Pro mode that immerses you in the stakes and emotions of playing at the highest level, it’s time to show out and tell the world to Check My Game.`,
    	publisher: "Electronic Arts",
    	platform: "PS5",
    	ageRating: "T - Teen",
    	developer: "EA Vancouver"
    },

    75: {
        id: 75, 
	    name: "Frostpunk 2 Icebreaker Edition",
	    category: "Playstation 5 Game",
	    tags: ["Strategy", "City-Building"],
	    genre: "Strategy",
	    price: 3195,
	    rating: "★★★★☆",
	    image: "Product Images/Playstation/PS5/ps5-frostpunk-2-icebreaker-edition-r1.webp",
	    fullDescription: `Visit the frostland 30 years after the Great Storm and face a new deadly threat to your City’s future – human nature. Build your City on a new scale by creating entire districts with different purposes: industrial, scientific, etc. Make sure that all parts of the City work in unison with each other like cogs of a giant, resource-hungry machine.

        Erect The Council building where you’ll forge laws of the growing metropolis as well navigate between different factions and their ideas for the future. Make decisions about your City’s progress, face their outcomes, and above all keep the City safe from the consequences of internal unrest.

        THE FROST NEVER ENDS - The game takes place 30 years after the apocalyptic blizzard that has taken place in Frostpunk. Earth is still overwhelmed by the neverending frost and harsh, icy climate. You play as the leader of a resource-hungry metropolis where expansion and internal conflicts are an unavoidable reality. It’s up to you to make decisions about your City’s future and face their consequences. In Frostpunk 2 you can build your City on a new scale by creating entire districts with different purposes. Make sure that all parts of the City work well together as well as research technologies that will set the direction for your citizens’ progress

        THE CITY MUST NOT FALL - “Frostpunk 2 is still a game about the City and its society,” states Jakub Stokalski, game Co-Director and Design Director at 11 bit studios. “But inner turmoils, sparked by rising social differences, mean that players will be facing new kinds of threats. We use a post-apocalyptic setup to tell a meaningful story about human ambition. Because ultimately, what can end us is not nature itself – it’s human nature

        NAVIGATE BETWEEN FACTIONS AS A STEWARD - As the City grows, creating and passing new laws becomes a more complex matter. The people slowly divide into factions with different, often contradictory visions of the future. The Council is a place where these ideas clash, sometimes violently. It’s your role as a Steward to ensure that the city will not fall because of those conflicts. Manage emerging crises while at the same time steering humanity towards a new destiny`,
	    publisher: "11 bit studios",
	    platform: "PS5",
	    ageRating: "M - Mature",
	    developer: "11 bit studios"
    },

    76: {
    	id: 76,
	    name: "Anno 117: Pax Romana",
	    category: "Playstation 5 Game",
	    tags: ["Strategy", "City-Building"],
	    genre: "Strategy",
	    price: 3195,
	    rating: "★★★☆☆",
	    image: "Product Images/Playstation/PS5/ps5_anno_117_pax_romana_1.webp",
	    fullDescription: `Anno 117 : Pax Romana

        In the latest installment of the award-winning Anno strategy franchise, it’s your destiny to shape the Roman Empire in the year 117AD. As governor, will you encourage economic growth or expand your rule through dominance? Lead with rebellion or unite a diverse culture?

        The cost of peace is yours to decide.`,
	    publisher: "Ubisoft",
	    platform: "PS5",
	    ageRating: "T - Teen",
	    developer: "Ubisoft Mainz",
    },

    77: {
        id: 77, 
        name: "[PRE ORDER]REANIMAL - Standard Edition",
        category: "Playstation 5 Game",
        releaseDate: new Date("2025-12-15"),
        status: "PRE-ORDER",
        tags: ["Strategy", "Horror"],
        genre: "Strategy",
        price: 500,
        rating: "No ratings yet.",
        image: "Product Images/Playstation/PS5/ps5-reanimal.webp",
        fullDescription: `WHAT IS REANIMAL?
        The original creators of Little Nightmares™ & Little Nightmares™ II have returned to take you on a more terrifying journey than ever before. In this co-op horror adventure game, you play as a brother & sister who go through hell to rescue their missing friends. Exploring by boat and on land, you must use your wits to survive, work together to escape the hellish island, and the dark secret that haunts you.

        Features

        HORROR WITH HOPE - In this dark, unsettling tale, the emphasis is on tension and thick atmosphere, as you join the two orphans on a desperate search for hope and redemption in the direst of circumstances

        ACROSS A DARK AND TWISTED WORLD - Traverse an intriguing but terrifying world, where the main path is only one part of the fragmented story. Discover all sorts of mysterious locations on your perilous journey, each with its own story to tell

        A DREAD-FILLED ADVENTURE - Tarsier Studios has returned, bringing their unique visual style to bear on a whole host of new twisted monsters and broken, yet resilient, child characters. Fragments of the children's troubled past have been used as inspiration for their character design, and for the monsters that now torment them

        SHARE THE SCARE - Nobody should be forced to go through hell alone! Fully playable in single player and local & online co-op, REANIMAL has a shared, directed camera, designed to maximise claustrophobia and tension`,
        publisher: "THQ Nordic",
        platform: "PS5",
        ageRating: "M - Mature",
        developer: "Tarsier Studios",
    },

    78: {
	    id: 78,
	    name: "Metal Slug Tactics",
	    category: "Playstation 5 Game",
	    tags: ["Strategy","Turn-Based"],
	    genre: "Strategy",
	    price: 2150,
	    rating: "★★★☆☆",
	    image: "Product Images/Playstation/PS5/ps5-metal-slug-tactics-r2_1.webp",
	    fullDescription: `Metal Slug Tactics brings the explosive charm and nostalgic fun of the cult METAL SLUG series to the tactical scene! Get ready for an intense ride through the best of both worlds: classic arcade action and rogue-lite tactical thrills. Jump into the combat zone and revive your METAL SLUG nostalgia in a whole new way!

        STORY:

        Donald Morden is back! After years of hiding in a country opposed to the World Government, the devious General patiently staged a coup. Now, he is finally ready to take revenge upon the World with the army he has secretly gathered throughout the years.

        The Peregrine Falcon Squad will have to do everything in their power to make it through the enemy lines and take down General Morden before the war escalates into catastrophe!`,
	    publisher: "H2 Interactive",
	    platform: "PS5",
	    ageRating: "E - Everyone",
	    developer: "Leikir Studio"
    },

    79: {
	    id: 79,
	    name: "Civilization VII",
	    category: "Playstation 5 Game",
	    tags: ["Strategy", "Turn-Based"],
	    genre: "Strategy",
	    price: 3550,
	    rating: "★☆☆☆☆",
	    image: "Product Images/Playstation/PS5/ps5-sid-meiers-civilization-vii-cover_1.webp",
	    fullDescription: `The award-winning strategy game franchise returns with a revolutionary new chapter. Sid Meier's Civilization® VIIem powers you to build the greatest empire the world has ever known!

        In Civilization VII, your strategic decisions shape the unique cultural lineage of your evolving empire. Rule as one of many legendary leaders from throughout history and steer the course of your story by choosing a new civilization to represent your empire in each Age of human advancement.

        Construct cities and architectural wonders to expand your territory, improve your civilization with technological breakthroughs, and conquer or cooperate with rival civilizations as you explore the far reaches of the unknown world. Pursue prosperity in an immersive solo experience or play with others in online multiplayer.**

        Whether you choose to follow a path rooted in history or reimagine possibilities to chart your own way forward, build something you believe in and create a legacy that echoes through the Ages in Civilization VII.`,
	    publisher: "2K Games",
	    platform: "PS5",
	    ageRating: "E - Everyone",
	    developer: "Firaxis Games",       
    },

    80: {
        id: 80,
	    name: "Hades",
	    category: "Nintendo Switch 1 Game",
	    tags: ["Action", "Rougelike"],
	    genre: "Action",
	    price: 1495,
	    rating: "★★★★★",
	    image: "Product Images/Nintendo/Switch 1/s-l1600.webp",
	    fullDescription: `Play as Zagreus, the prince of the Underworld, fighting to escape from the realm of Hades with fast‑paced hack‑and‑slash combat, arsenal of godly weapons, and a rich narrative that evolves with each run. `,
        publisher: "Supergiant Games",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Supergiant Games"
    },

    81: {
        id: 81,
        name: "Astral Chain",
        category: "Nintendo Switch 1 Game",
        tags: ["Action", "Hack and Slash"],
        genre: "Action",
        price: 2450,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/astral-chain-us-switch.webp",
        fullDescription: `As part of a police special task force, it’s up to you to fight against mysterious, alien-like creatures who have invaded the world.

        In the Ark, a multi-cultural city in the near future, disaster strikes when gates to another dimension suddenly appear! Dangerous creatures begin to emerge, attacking the people and polluting the land, and normal police forces are unable to compete with them. To stand up against these threats, a brand new, special police unit is known as Neuron is formed.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Platinum Games",       
    },

    82: {
        id: 82,
        name: "Bayonetta 2",
        category: "Nintendo Switch 1 Game",
        tags: ["Action", "Hack and Slash"],
        genre: "Action",
        price: 2995,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-bayonetta-2.jpg",
        fullDescription: `Bayonetta’s back and more powerful than ever. Wield wild weapons and execute deadly moves—like the powerful Umbran Climax—to take out angels and demons in this breathtaking action game. You can even team up with friends in 2-player online or local wireless co-op fights (additional accessories required; sold separately.) Bayonetta is a butt-kicking, havoc-wreaking witch who wields sweet weapons like pistols, whips, hammers, flamethrowers, and poison bows. But it’s not just about brawn—it’s also about style. Bayonetta is deadly but sleek, with moves like Witch Time that slows down time itself, and the all-new Umbran Climax—a special magic attack that summons Infernal Demons to devastate enemies. The Bayonetta™ 2 game also features an online and local wireless 2-player cooperative mode where players bet halos on their performance and work together to amplify their sass, cause destruction, and score some riches.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "Platinum Games"
    },

    83: {
        id: 83,
        name: "NieR: Automata – The End of YoRHa Edition",
        category: "Nintendo Switch 1 Game",
        tags: ["Action", "Hack and Slash"],
        genre: "Action",
        price: 2199,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/nsw-nier-automata-the-end-of-yorha-edition-cover_1.webp",
        fullDescription: `NieR:Automata The End of YoRHa Edition is the Nintendo Switch™ version of NieR:Automata, an award-winning post-apocalyptic action RPG that has achieved deep-rooted popularity around the world.

        The distant future…

        Invaders from another world attack without warning, unleashing a new type of threat: weapons known as “machine lifeforms.” In the face of this insurmountable threat, mankind is driven from Earth and takes refuge on the Moon. As 2B, a member of the newly organized android military force YoRHa, players will immerse themselves in a ferocious battle to take back the planet.

        Experience a captivating story that goes beyond simple entertainment, inspiring a wide array of emotions as it unfolds through genre-blending action in a beautifully desolate open world.`,
        publisher: "Square Enix", 
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "Platinum Games"
    },

    84: {
        id: 84,
        name: "The Legend of Zelda: Tears of the Kingdom ",
        category: "Nintendo Switch 1 Game",
        tags: ["Action", "Open World"],
        genre: "Action",
        price: 2650,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/zelda-tears-of-the-kingdom-switch_1.jpg",
        fullDescription: `An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch™. The adventure is yours to create in a world fueled by your imagination.

        In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?

        Nintendo Switch Online members can buy a pair of Nintendo Switch Game Vouchers* and redeem each one for any game in the voucher catalog—including The Legend of Zelda: Tears of the Kingdom.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Nintendo EPD",
    }, 

    85: {
        id: 85,
        name: "The Legend of Zelda: Breath of the Wild",
        category: "Nintendo Switch 1 Game",
        tags: ["Adventure", "Open World"],
        genre: "Adventure",
        price: 2450,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-the-legend-of-zelda-breath-of-the-wild.jpg",
        fullDescription: `Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on the Nintendo Switch console, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.

        Discover a world as never before seen: by making your own path, choices, and consequences
        Ingenuity is the key to survival: find multiple solutions to tons of dynamic puzzles
        Surprises hide around every corner: scavenge weapons, armor, plants, animals, and more
        Live off the land: find weapons and armor, cook food, and brew elixirs
        Utilize special technology: the in-game Sheikah Slate controls objects and enemies in fun ways
        Gear up: many weapons and armor have unique stats, resistances, effects, and durability
        Shrines offer hundreds of clever challenges even veterans won’t see coming
        Compatible amiibo include the Wolf Link amiibo figure, figures from the Legend of Zelda 30th Anniversary amiibo series, and figures from The Legend of Zelda: Breath of the Wild amiibo series. Each one will offer Link in-game items that may just come in handy.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Nintendo EPD", 
    },

    86: {
        id: 86,
        name: "Super Mario Odyssey",
        category: "Nintendo Switch 1 Game",
        tags: ["Adventure", "Platformer"],
        genre: "Adventure",
        price: 2450,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-super-mario-odyssey.jpg",
        fullDescription: `Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities—like the power to capture and control objects, animals, and enemies—to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!

        Explore huge 3D kingdoms filled with secrets and surprises, including costumes for Mario and lots of ways to interact with the diverse environments - such as cruising around them in vehicles that incorporate the HD Rumble feature of the Joy-Con controller or exploring sections as Pixel Mario.
        Thanks to his new friend, Cappy, Mario has brand-new moves for you to master, like cap throw, cap jump and capture. With capture, Mario can take control of all sorts of things, including objects and enemies!
        Visit astonishing new locales, like skyscraper-packed New Donk City, and run into familiar friends and foes as you try to save Princess Peach from Bowser's clutches and foil his dastardly wedding plans.
        A set of three new amiibo figures* - Mario, Princess Peach and Bowser in their wedding outfits - will be released at launch. Some previously released amiibo will also be compatible with this title. Tap supported amiibo to receive gameplay assistance - some amiibo will also unlock costumes for Mario when scanned!`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Nintendo EPD",       
    },

    87: {
        id: 87,
        name: "Travis Strikes Again: No More Heroes",
        category: "Nintendo Switch 1 Game",
        tags: ["Adventure", "Co-op"],
        genre: "Adventure",
        price: 1795, 
        rating: "★★☆☆☆",
        image: "Product Images/Nintendo/Switch 1/travis_strikes_again.webp",
        fullDescription: `Travis is living the trailer park dream in the rural South when Badman comes knocking to avenge his daughter, Bad Girl. It looks like Game Over for Travis when both of them are sucked into the legendary Death Drive Mk II games console. This time, the games are taking the fight to you! The characters of the Death Drive Mk II’s diverse game library aren’t going to go down without a fight! Slice your way through them with all the beam charging, pro-wrestling-finisher action you know and love – turned up to 11. Burn through your skill gauge and link special and regular attacks for some kick-ass combos! Mix-up your approach and own your playstyle. Play as Travis, Badman and—if you’re a bad enough dude—maybe Shinobu and Bad Girl, too!`,
        publisher: "Grasshopper Manufacture",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "Xseed Games"
    },

    88: {
        id: 88,
        name: "Kirby and the Forgotten Land",
        category: "Nintendo Switch 1 Game",
        tags: ["Adventure", "Platformer"],
        genre: "Adventure",
        price: 2495,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/kirby-and-the-forgotten-land-switch_1_1_1.webp",
        fullDescription: `Join Kirby in an unforgettable journey through a mysterious world in a 3D platforming adventure

        Float off on an all-new adventure as the powerful puffball, Kirby. Explore in 3D stages as you discover a mysterious world with abandoned structures from a past civilization—like a shopping mall?! Copy enemies’ abilities like the new Drill and Ranger and use them to attack, explore your surroundings, and save the kidnapped Waddle Dees from the ferocious Beast Pack alongside the mysterious Elfilin. Hope you’re hungry for an unforgettable adventure!

        Join up with a pointy partner, Bandana Waddle Dee, in co-op play

        Pass a Joy-Con™ controller to a buddy to play as the spear-wielding Bandana Waddle Dee and help each other explore and battle through this colorful world. While Kirby can float and inhale enemies, Bandana Waddle Dee can spin and stab with his sturdy spear. Find friendship in this forgotten world and save the Waddle Dees!  

        Float over obstacles and fight through enemies on your way to each stage’s goal as you slash, poke, freeze, and hammer using Kirby’s copy abilities. 

        Each themed stage you travel through will hide several friendly Waddle Dees in peril! Save them to grow the home base of your adventure, the once-deserted Waddle Dee Town. The Waddle Dees you rescue will unlock shops and leaderboards*. You’ll also be able to enjoy some of the townsfolk’s favorite games.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "HAL Laboratory"
    },

    89: {
        id: 89,
        name: "Fire Emblem Warriors: Three Hopes",
        category: "Nintendo Switch 1 Game",
        tags: ["Adventure", "Strategy"],
        genre: "Adventure",
        price: 2095,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/fire-emblem-warriors-three-hope-us-switch.webp",
        fullDescription: `Step into the shoes of Shez, as they meet Edelgard, Dimitri, Claude, and other Fire Emblem: Three Houses characters as you fight for the future of Fódlan. Align with a leader to build and command an army in 1 vs. 1,000-style battles and deep strategy. The house you choose will bring you through one of three compelling stories, each with a different outcome. Each Fire Emblem: Three Houses character you recruit on these journeys has a distinct set of flashy combos and powerful specials that can cut through hordes of enemies.

        Use the strategy of Fire Emblem to gain the tactical advantage in Warriors-style gameplay

        Dive into real-time battles as you and your army of Fire Emblem: Three Houses characters take on hundreds of opponents, while using elements from Fire Emblem to maximize your strategy. Issue commands to your army in the midst of the chaos of battle to achieve missions and objectives. Plan ahead and prepare for battle by equipping weapons, skills, and classes that capitalize on opponent weaknesses. Assign elements from Fire Emblem: Three Houses, like crests or battalions, to characters to further hone how you plan your approach.

        Strengthen your bonds in and out of battle

        Develop and build battle-tested relationships with other Fire Emblem: Three Houses characters as you fight for the future of Fódlan. Deepen the relationships between characters to give yourself a tactical advantage on the battlefield and to see them open up in support conversations. Bring characters closer together by pairing them up in battle or by spending time together at base camp. Develop your base camp and train, shop, and prepare each of your team members before jumping into the heat of battle.

        Purchase the digital version of the game to receive regular visits from a friendly messenger owl outside of your personal quarters. It'll gift you Owl Feathers that can be used to boost your support level with other characters!`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Omega Force"
    },

    90: {
        id: 90,
        name: "Marvel vs. Capcom: Arcade Classics",
        category: "Nintendo Switch 1 Game",
        tags: ["Arcade", "Fighting"],
        genre: "Arcade",
        price: 2095,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-marvel-vs-capcom-arcade-classics-_us_-cover.jpg",
        fullDescription: `Beloved Marvel characters take the stage in Capcom-produced action and fighting games in this collection of timeless classics! Enjoy both English and Japanese versions of the arcade releases! All kinds of new features have been added, including online play! Experience these wonderful games with players from all over the world!

        Game List:

        X-Men: Children of the Atom
        Marvel Super Heroes
        X-Men vs. Street Fighter
        Marvel Super Heroes vs. Street Fighter
        Marvel vs. Capcom: Clash of Super Heroes
        Marvel vs. Capcom 2: New Age of Heroes
        The Punisher`,
        publisher: "Capcom",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Capcom"
    },

    91: {
        id: 91,
        name: "Yugioh Early Days Collection",
        category: "Nintendo Switch 1 Game",
        tags: ["Arcade", "Cards"],
        genre: "Arcade",
        price: 2250,
        rating: "★☆☆☆☆",
        image: "Product Images/Nintendo/Switch 1/nintendo_switch_yu-gi-oh_early_days_collection_1.webp",
        fullDescription: `Features

        Expansive collection of retro games from the early days of Yu-Gi-Oh
        Includes games previously released in Japan
        Includes titles like: 2000's Yu-Gi-Oh! and Duel Monsters 4: Battle of Great Duelists
        Duel alongside old friends as superstars of the original
        This classic compilation spans strategy card games and more
        "Yu-Gi-Oh! EARLY DAYS COLLECTION" is packed with Yu-Gi-Oh! video games from the very early days of Dueling!

        Titles Revealed So Far:

        Yu-Gi-Oh! Duel Monsters (1998/GAME BOY)
        Yu-Gi-Oh! Duel Monsters II: Dark Duel Stories (1999/GAME BOY, GAME BOY COLOR)
        Yu-Gi-Oh! Dark Duel Stories (2000 JP, 2002 US, 2003 EU/GAME BOY COLOR)
        Yu-Gi-Oh! Duel Monsters 4: Battle of Great Duelist (2000/GAME BOY COLOR. Includes online battles support).
        Yu-Gi-Oh Duel Monsters 6, Expert 2* (2001/GAME BOY ADVANCE)
        Yu-Gi-Oh! The Eternal Duelist Soul (2001 JP, 2002 US, 2003 EU/GAME BOY ADVANCE)
        Yu-Gi-Oh! The Sacred Cards (2002 JP, 2003 US, 2004 EU/GAME BOY ADVANCE)
        Yu-Gi-Oh! Reshef of Destruction (2003 JP, 2004 US and EU/GAME BOY ADVANCE)
        Yu-Gi-Oh! Duel Monsters 6: Expert 2 to be released in Japanese language ONLY.`,
        publisher: "Konami",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Digital Eclipse"
    },

    92: {
        id: 92,
        name: "Cuphead",
        category: "Nintendo Switch 1 Game",
        tags: ["Arcade", "Platformer"],
        genre: "Arcade",
        price: 1595,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/cuphead-us-switch_2.webp",
        fullDescription: `Come one, come all, to witness an interactive entertainment spectacle for the ages. Presenting…the all-cartoon Wondergame, Cuphead!! In this classic run and gun action game, play as brothers Cuphead or Mugman (in single player or local co-op) as you traverse strange worlds and take on massive, screen-filling bosses to earn your souls back from The Devil himself! It’s no exaggeration to say there really isn’t any other experience like this worldwide phenomenon from developer Studio MDHR. Inspired by cartoons of the 1930s, Cuphead’s visuals and audio are meticulously created with the same techniques of the era: traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings. Cuphead truly is a playable cartoon that feels plucked from the golden era of animation. But that’s not all! This rollicking retail edition includes the incredibly popular DLC expansion “The Delicious Last Course”, offering players a bevy of additional bosses, wondrous weapons & charms, and all-new playable character Ms. Chalice. Add in a set of delightful pack-ins lovingly crafted by the artists at Studio MDHR, and you get quite simply the most complete Cuphead experience ever, perfect for long-time fans and newcomers alike!`,
        publisher: "Studio MDHR",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Studio MDHR"       
    },

    93: {
        id: 93,
        name: "Sonic Frontiers",
        category: "Nintendo Switch 1 Game",
        tags: ["Arcade", "Open World"],
        genre: "Arcade",
        price: 1495,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/sonic-frontiers-us-switch_1.jpg",
        fullDescription: `Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. Accelerate to new heights and experience the thrill of high-velocity, open-zone platforming freedom as you race across the five massive Starfall Islands. Jump into adventure, wield the power of the Ancients, and fight to stop these new mysterious foes.

        Experience All-New Open Zone Platforming

        Race across five massive overworld islands brimming with dense forests, overflowing waterfalls, and sizzling desert landscapes, each with their own unique action-platforming challenges and hidden secrets to uncover.

        Unparalleled High-Speed Freedom 

        Adventure across the Starfall Islands and see what each has to offer at the speed that only Sonic can deliver. Blaze a trail as you see fit and discover side quests, solve puzzles, scale enormous structures, go fishing, and encounter a friendly face or two along the way...

        Challenge Yourself In CyberSpace 

        Discover portals scattered across the island and venture into Cyber Space levels through portals scattered across the islands featuring signature 3D platforming at Sonic speeds, packed with challenges to put your skills to the test.

        Cyber-Powered Combat 

        The Starfall Islands are home to strange creatures Sonic has never encountered before. Use the all-new battle system and skill tree upgrades to fight strategically, combining moves such as dodges, parries, counters, combos, and the new Cyloop ability to take down mysterious foes and colossal titans.

        A New Adventure Full of Mystery and Intrigue 

        Become Sonic and journey to uncover the mysteries of the remains of an ancient civilization plagued by robotic hordes. With nothing but a handful of questions and a disembodied voice to guide you, set out to save your friends and the enigmatic inhabitants of the Starfall Islands from a colossal, mechanized threat.`,
        publisher: "Sega",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Sonic Team"
    },

    94: {
        id: 94,
        name: "Metroid Prime Remastered",
        category: "Nintendo Switch 1 Game",
        tags: ["Arcade", "Metroidvania"],
        genre: "Arcade",
        price: 1750,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/metroid-prime-remastered-switch_2.webp",
        fullDescription: `Suit up for an iconic adventure

        Intergalactic bounty hunter Samus Aran receives a distress signal from a wrecked frigate in orbit around planet Tallon IV. Upon investigation, the frigate reveals itself to be a Space Pirate research vessel home to terrifying genetic experiments using the mysterious Phazon substance. There, Samus encounters her nemesis, Meta Ridley, whom she pursues to the surface of Tallon IV. It’s up to her alone to explore the planet’s interconnected regions, investigate its dark secrets, and end the intergalactic threat posed by Phazon.

        Experience this critically acclaimed first-person adventure like never before with remastered visuals, audio, controls, and more.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Retro Studios"        
    },

    95: {
        id: 95,
        name: "Super Smash Bros. Ultimate",
        category: "Nintendo Switch 1 Game",
        tags: ["Fighting", "Platformer"],
        genre: "Fighting",
        price: 2495,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-super-smash-bros-ultimate-standard-ed.jpg",
        fullDescription: `Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!

        Having trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally or online, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Bandai Namco Studios, Sora Ltd."        
    },

    96: {
        id: 96,
        name: "Dragon Ball FighterZ",
        category: "Nintendo Switch 1 Game",
        tags: ["Fighting", "Anime"],
        genre: "Fighting",
        price: 2895,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/dragon-ball-fighterz-us-switch.jpg",
        fullDescription: `DRAGON BALL FighterZ is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its all-powerful fighters.

        Partnering with Arc System Works, DRAGON BALL FighterZ maximizes high end Anime graphics and brings easy to learn but difficult to master fighting gameplay.

        High-end Anime Graphics
        Using the power of the Unreal engine and the talented team at Arc System Works, DRAGON BALL FighterZ is a visual tour-de-force.

        3vs3 Tag/Support
        Build your dream team and sharpen your skills to master high-speed tag combinations.

        Thrilling Online Features
        Ranked matches, interactive lobby, crazy 6-player Party Match... There is something for every taste!

        Exclusive Story Mode
        Discover a scenario featuring Android 21, a brand new character whose creation was supervised by Akira Toriyama himself.`,
        publisher: "Bandai Namco Entertainment",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Bandai Namco Studios, Arc System Works"       
    },

    97: {
        id: 97,
        name: "Mortal Kombat 11",
        category: "Nintendo Switch 1 Game",
        tags: ["Fighting", "Multiplayer"],
        genre: "Fighting",
        price: 1395,
        rating: "★★★☆☆",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-mortal-kombat-11.webp",
        fullDescription: `Mortal Kombat is back and better than ever in the next evolution of the iconic franchise. The all new Custom Character Variations give you unprecedented control to customize the fighters and make them your own. The new graphics engine showcasing every skull-shattering, eye-popping moment, brings you so close to the fight you can feel it. And featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best in class cinematic story mode continues the epic saga over 25 years in the making.`,
        publisher: "Warner Bros. Interactive Entertainment",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "NetherRealm Studios"
    },

    98: {
        id: 98,
        name: "Street Fighter 30th Anniversary Collection",
        category: "Nintendo Switch 1 Game",
        tags: ["Fighting", "Multiplayer"],
        genre: "Fighting",
        price: 1995,
        rating: "★★★☆☆",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-street-fighter-30th-anniversary-collection.webp",
        fullDescription: `Celebrate the 30th Anniversary of the iconic Street Fighter franchise with the ultimate tribute to its arcade legacy in the Street Fighter 30th Anniversary Collection

        Includes 12 arcade classics
        Take four iconic entries online with ranked or casual matches: SFII Hyper Fighting, Super SFII Turbo, SF Alpha 3 and SFIII: 3rd Strike
        Players can utilize save states as they progress through the game offline
        Revisit historic art and explore an interactive timeline of events
        Enjoy the most memorable Street Fighter tracks from the collection in the music player`,
        publisher: "Capcom",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Digital Eclipse"        
    },

    99: {
        id: 99,
        name: "Mortal Kombat 1",
        category: "Nintendo Switch 1 Game",
        tags: ["Fighting", "Multiplayer"],
        genre: "Fighting",
        price: 3690,
        rating: "★★☆☆☆",
        image: "Product Images/Nintendo/Switch 1/mortal_kombat_1_nsw_1.jpg",
        fullDescription: `Discover a Reborn Mortal Kombat™ Universe

        It’s In Our Blood!

        Discover a reborn Mortal Kombat™ Universe created by the Fire God Liu Kang. Mortal Kombat™ 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!`,
        publisher: "Warner Bros. Games",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "NetherRealm Studios"        
    },

    100: {
        id: 100,
        name: "Pokemon Legends Z-A",
        category: "Nintendo Switch 1 Game",
        tags: ["RPG", "Casual"],
        genre: "Role Playing",
        price: 2595,
        rating: "★★★☆☆",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-pokemon-legends-z-a_2.jpg",
        fullDescription: `The story is set in Lumiose City, where an urban redevelopment plan is underway to shape the city into a place that belongs to both people and Pokémon. Compared to Lumiose City as it appeared in the Pokémon X and Pokémon Y games, released in 2013, more greenery now adorns the city, alongside facilities with a cutting-edge feel.

        In Lumiose City, spaces frequented by people—such as shopping arcades, cafés, and restaurants—coexist with more natural areas, such as waterfronts and verdant parks. At the center of Lumiose stands Prism Tower, the very symbol of the city.

        The Story Begins with a Sightseeing Trip to Lumiose City...

        While visiting Lumiose City during your travels, you’ll come to stay in an old hotel named Hotel Z. This hotel will serve as your base as you and the new friends you’ll meet in Lumiose tackle all sorts of incidents that will occur in the city.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Game Freak"
    },

    101: {
        id: 101,
        name: "Fire Emblem: Three Houses",
        category: "Nintendo Switch 1 Game",
        tags: ["Role Playing", "Turn Based"],
        genre: "Role Playing",
        price: 2495,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/FE-ThreeHouses_1600x.webp",
        fullDescription: `A turn-based, tactical RPG that puts new twists on strategic battling
        As a professor, lead students in their academic lives and on the battlefield
        For the first time in series history, battalions of troops follow individual units to support them in battle
        Freely roam Garreg Mach Monastery, interact with students in a variety of ways over lunch,even to bond and gather intel
        As a female or male professor, you'll meet House Leaders and future rulers Edelgard, Dimitri, and Claude`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Intelligent Systems"
    },

    102: {
        id: 102,
        name: "Xenoblade Chronicles 2",
        category: "Nintendo Switch 1 Game",
        tags: ["Role Playing", "Action"],
        genre: "Role Playing",
        price: 2995,
        rating: "★★★★☆",
        image: "Product Images/Nintendo/Switch 1/nintendo-switch-xenoblade-chronicles-2.jpg",
        fullDescription: `Search for the ultimate paradise, Elysium, with your companion, Pyra.

        Explore an endless ocean of clouds, where the last remnants of civilization live on the backs of colossal beasts called Titans. Experience the story of Rex and his new friend, Pyra, a mysterious being known as a Blade who grants him tremendous power. Together, search for Pyra's long lost home Elysium, the ultimate paradise for all of humanity.

        Features:
        Explore colossal beasts called Titans, the homes of different civilizations, offering expansive regions to discover.
        Form powerful bonds with Blades, unique beings granting tremendous power to their users, called Drivers.
        Features a deep battle system that builds on triumphs of the Xenoblade Chronicles and Xenoblade Chronicles X games.`,
        publisher: "Nintedo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Monolith Soft"
    },

    103: {
        id: 103,
        name: "Animal Crossing: New Horizons",
        category: "Nintendo Switch 1 Game",
        tags: ["Role Playing", "Casual"],
        genre: "Role Playing",
        price: 2295,
        rating: "★★★★★",
        image: "Product Images/Nintendo/Switch 1/animal-crossing-mde-switch.jpg",
        fullDescription: `If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package! Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service! But deep down, isn’t there a part of you that longs for…freedom? Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered!

        Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways. Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more!`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Nintendo EPD"        
    },
    104: {
        id: 104,
        name: "Octopath Traveler",
        category: "Nintendo Switch 1 Game",
        tags: ["Role Playing", "Strategy"],
        genre: "Role Playing",
        price: 500,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Start from zero and discover the newest entry in the OCTOPATH TRAVELER series. Experience a story of restoration and retribution over the divine rings—an epic saga that unfolds across the realm of Orsterra.
        Enjoy familiar features such as the series' HD-2D graphics, a fusion of retro pixel art and 3DCG; the player's ability to roleplay using Path Actions of their choice; and the Break and Boost system that can turn the tide of battle. Additionally, brand-new features such as character creation and town building allow you to create your own character and restore your hometown.`,
        publisher: "Suaqre Enix",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Square Enix"
    },
    105:{
        id: 105,
        name: "Stardew Valley",
        category: "Nintendo Switch 1 Game",
        tags: ["Simulation", "Casual"],
        genre: "Simulation",
        price: 1695,
        rating: "★★★★★",
        image: "",
        fullDescription: `You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!`,
        publisher: "ConcernedApe",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "ConcernedApe"
    },
// nadagdag na laro 
    106: {
        id: 106,
        name: "Nintendo Switch Harvest Moon Light Of Hope Complete Edition ",
        category: "Nintendo Switch 1 Game",
        tags: ["Simulation", "Casual"],
        genre: "Simulation",
        price: 975,
        rating: "★★★★☆",
        image: "",
        fullDescription: `After looking for a fresh start, you drift into a small Harbor town devastated by a Storm. The town has been deserted, but you’re never One to back down from a challenge! It will be up to you to help rebuild the town and solve the mystery of the lighthouse…But it won’t be easy!`,
        publisher: " Natsume Inc.",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Natsume Inc., Tabotto Corporation",
    },

    107: {
        id: 107,
        name: "Two Point Hospital",
        category: "Nintendo Switch 1 Game",
        tags: ["Simulation", "Strategy"],
        genre: "Simulation",
        price: 1695,
        rating: "★★★☆☆",
        image: "",
        fullDescription: `Build up a hospital from nothing to a masterpiece as you design the most beautiful – or functional – healthcare operation in the whole of Two Point County. Optimize your hospital design to increase patient (and cash) flow, arranging corridors, rooms, and waiting areas to your exact specifications. Expand your hospital to multiple buildings as you look to get as many patients through the door as possible. Place decorative and functional items around your hospital to improve its prestige, lower patient boredom, increase happiness and keep those end-of-year awards flowing in. Features two great expansions, 21 hospitals, and 119 very unusual illnesses!`,
        publisher: "Sega",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Two Point Studios",
    },
    108: {
        id: 108,
        name: "Cities: Skylines – Nintendo Switch Edition",
        category: "Nintendo Switch 1 Game",
        tags: ["Simulation", "Strategy"],
        genre: "Simulation",
        price: 1395,
        rating: "★★★☆☆",
        image: "",
        fullDescription: `Cities: Skylines is a modern take on a classic city builder. With original gameplay to realize the thrill and hardships of creating and maintaining a real city. Boasting fully realized transport and economy systems, Cities: Skylines is designed to suit any play style - and now, anytime, anywhere.

        More portable than ever, the new Nintendo Switch™ Edition of this best-selling city builder comes complete with reworked UI, designed especially for Switch, along with two of Cities: Skylines’ most popular expansions - After Dark and Snowfall.

        Multi-tiered and challenging simulation: Constructing your city from the ground up is easy to learn, but hard to master. Playing as the mayor, you’ll be faced with balancing essential requirements like education, healthcare and much more along with your city’s real economy system. Citizens in your city react fluidly, with gravitas and an air of authenticity to a multitude of gameplay scenarios.

        Nintendo Switch edition exclusive: Using HD Rumble, a rumble effect helps find the most efficient area to place service buildings in your city. Pro controllers are also supported, and additional tutorials help guide your first playthrough for a better learning experience.

        Extensive local traffic simulation: Colossal Order's extensive experience developing the Cities in Motion series is put to work in fully fleshed out, well-crafted transport systems.

        Districts and Policies: Be more than just an administrator from city hall. Designating parts of your city as a district results in the application of policies which results in you rising to the status of Mayor for your own city.

        After Dark: Focused on leisure and tourist specialization, this expansion's central feature is to utilize the day and night cycle and alter the approach to managing your city. Will you construct a bustling city that lives and breathes at night, or succumb to the perils and misadventures of the dark hours?

        Snowfall: The difficulty heats up when the city cools down, thanks to this expansion's added challenges and assets, like snow maps, streetcars, and heating systems. There are in-game temperature readings, cosmetic weather enhancements, extra parks, and infrastructural demands to keep your citizens warm and safe from freezing conditions.`,
        publisher: "Paradox Interactive",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Colossal Order, Tantalus Media",
    },
 // nadagdag na laro 
    109: {
        id: 109,
        name: "fae farm",
        category: "Nintendo Switch 1 Game",
        tags: ["Simulation", "Casual"],
        genre: "Simulation",
        price: 2695,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Escape to the fairytale life of your dreams in Fae Farm, a farm sim RPG for 1-4 players. Craft, cultivate, and decorate to grow your shared homestead—and use spells to explore the enchanted island of Azoria! You’ll forge new bonds with residents, discover fae magic, and trek across mysterious realms. And as the seasons change, you’ll use all you've learned and discovered together to restore the world around you.`,
        publisher: "Phoenix Labs, Gambit Digital, Spike Chunsoft",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Phoenix Labs",
    },
    110: {
        id: 110,
        name: "Splatoon 3",
        category: "Nintendo Switch 1 Game",
        tags: ["Shooter", "Action"],
        genre: "Shooter",
        price: 2350,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Ink up the Splatlands in the next Splatoon game! Enter the Splatlands, a sun-scorched desert inhabited by battle-hardened Inklings and Octolings. , the city of chaos, is the adrenaline-fueled heart of this dusty wasteland. Even in this desolate environment, Turf War* reigns supreme and battles rage in new stages located in the surrounding wilds. Dynamic new moves help these fighters dodge attacks and cover more ground, along with a new bow-shaped weapon to sling ink. Join Agent 3 in a fight against the unruly Octarians in story mode. Discover the secrets of Alterna, the Fuzzy Ooze, and how they connect to the mode's theme, "Return of the Mammalians.” Team up and fend off waves of dangerous Salmonid bosses in the next iteration of Salmon Run*, a co-op mode with fresh new features.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Nintendo EPD",
    },
    111: {
        id: 111,
        name: "DOOM Eternal",
        category: "Nintendo Switch 1 Game",
        tags: ["Shooter", "Action"],
        genre: "Shooter",
        price: 1835,
        rating: "★★★★★",
        image: "",
        fullDescription: `Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear…is you.`,
        publisher: "Bethesda Softworks",
        platform: "Nintendo Switch",
        ageRating: "Shooter",
        developer: "id Software, Panic Button Games",
    },
    112: {
        id: 112,
        name: "BioShock: The Collection",
        category: "Nintendo Switch 1 Game",
        tags: ["Shooter", "Action"],
        genre: "Shooter",
        price: 1495,
        rating: "★★★★★",
        image: "",
        fullDescription: `Experience the unforgettable worlds and monumental stories of the award-winning BioShock series with BioShock: The Collection. Journey to the cities of Rapture and Columbia across BioShock Remastered, BioShock 2 Remastered, and BioShock Infinite: The Complete Edition, including all single-player add-on content. Fight for your life and outsmart your enemies, be it deep beneath the waves or high above the clouds.`,
        publisher: "2K",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "Irrational Games",
    },
// nadagdag na laro 
    113: {
        id: 113,
        name: "Wolfenstein II The New Colossus ",
        category: "Nintendo Switch 1 Game",
        tags: ["Shooter", "Action"],
        genre: "Shooter",
        price: 995,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Paris, 1980. BJ Blazkowicz, hero of the second American Revolution, is missing. Nineteen years after the events of Wolfenstein II: The New Colossus, BJ has disappeared after a mission into Nazi-occupied Paris. Now, after years of training and guidance from their battle-hardened father, BJ’s twin daughters Jess and Soph are forced into action. Team up with a new cast of freedom fighters and brave the unsettling sights and sounds of twisted, alternate reality 1980s Paris.`,
        publisher: "Bethesda Softworks",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: " MachineGames, Panic Button Games",
    },
// nadagdag na laro 
    114: {
        id: 114,
        name: "Borderlands Legendary Collection",
        category: "Nintendo Switch 1 Game",
        tags: ["Shooter", "Action"],
        genre: "Shooter",
        price: 1295,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Get three times the mayhem, three times the loot, and three times the action with the Borderlands Legendary Collection! Kill bandits and beasts, collect powerful weaponry, and maybe even save the universe in Borderlands: Game of the Year Edition, Borderlands 2, and Borderlands: The Pre-Sequel, along with piles of bonus add-on content for each game, adding 100+ hours of gameplay at an incredible value.`,
        publisher: " 2K Games",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "Gearbox Software",
    },
    115: {
        id: 115,
        name: "Mario Strikers: Battle League",
        category: "Nintendo Switch 1 Game",
        tags: ["Sports", "Multiplayer"],
        genre: "Sports",
        price: 2395,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Introducing Strike, a 5-on-5, soccer-like sport with no rules—do whatever it takes to win! Get gritty and try to score the most goals by tackling enemies, using items, and pulling off score-boosting special shots. Super Mario series mainstays like Peach, Toad, and Yoshi put their cleats (and stats) to the pitch and will stop at nothing to score. Customize your characters with gear that can augment their stats and appearance. Take the carnage online* or pass the ball to players locally**—just look out for the electric fence.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: " E (Everyone)",
        developer: "Next Level Games",
    },
    113: {
        id: 113,
        name: "NBA 2K24 Black Mamba Edition",
        category: "Nintendo Switch 1 Game",
        tags: ["Sports", "Casual"],
        genre: "Sports",
        price: 1950,
        rating: "★★★☆☆",
        image: "",
        fullDescription: `Grab your squad and experience the past, present, and future of hoops culture in NBA 2K24. Enjoy loads of pure, unadulterated action and limitless personalized MyPLAYER options in MyCAREER. Collect an impressive array of legends and build your perfect lineup in MyTEAM. Feel more responsive gameplay and polished visuals while playing with your favorite NBA and WNBA teams in PLAY NOW. See you on the court.`,
        publisher: "2K Games",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Visual Concepts",
    },
    114: {
        id: 114,
        name: "FIFA 23: Legacy Edition",
        category: "Nintendo Switch 1 Game",
        tags: ["Sports", "Multiplayer"],
        genre: "Sports",
        price: 1395,
        rating: "★★★☆☆",
        image: "",
        fullDescription: `EA SPORTS™ FIFA 23 brings even more of the action and realism of football to the pitch in The World’s Game, with advances in HyperMotion2 Technology driven by twice as much real-world motion capture helping to create more true football animation than ever before in every match. Play the biggest tournaments in football with both the men’s and women’s FIFA World Cup™ coming to FIFA 23 during the season, play as women’s club teams – powered by dedicated HyperMotion2 animation – for the first time ever, plus enjoy cross-play features that make it easier to play against friends. Enjoy a new way to play and build your dream squad in FIFA Ultimate Team™ with FUT Moments and a revamped Chemistry system, or live out your football dreams in Career Mode as you define your personality as a player and manage as some of football’s most famous names. In VOLTA FOOTBALL and Pro Clubs, bring more personality to the pitch with new levels of customisation and enhanced street and stadium gameplay. However you play, experience The World’s Game with over 19,000 players, 700+ teams, 100+ stadiums, and over 30 leagues - including the UEFA Champions League, Premier League, new Barclays FA Women’s Super League and France D1 Arkema with unrivalled authenticity in FIFA 23.`,
        publisher: "EA Sports",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "EA Canada",
    },
    
115: {
        id: 115,
        name: "Mario Golf: Super Rush",
        category: "Nintendo Switch 1 Game",
        tags: ["Sports", "Multiplayer"],
        genre: "Sports",
        price: 2795,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Hit the green with up to four players locally* or online** and golf with familiar Mushroom Kingdom characters. Modes range from Standard Golf to the energetic Speed Golf and an RPG-like golf adventure in story mode. Intuitive motion or button controls, a shot gauge that adapts to the curve of the course, and other new features make it easy for both new players and seasoned pros to drive and putt with power.`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Camelot Software Planning",
    },
    116: {
        id: 116,
        name: "34 Sports Games World Edition",
        category: "Nintendo Switch 1 Game",
        tags: ["Sports", "Multiplayer"],
        genre: "Sports",
        price: 1550,
        rating: "★★★★☆",
        image: "",
        fullDescription: `34SportsGames– World Edition(Switch) is the ultimate game that brings together 34different sports in one game! Challenge your family or friends and may the best player win!

        Choose your game style: Quick match or tournament?Compete or play together in the stadium!

        Discover a multitude of games: whether you love football, basketball,weightlifting, trampoline,archery, or even bowling, you’ll find all yourfavoritesports here!

        Defend your country and travel around the globe!Choose a country and compete toget new world records!

        As you progress in the game, you’ll have the chance to unlock new costumes for your characters.

        Ready to showcase your skills and take on all the challenges? Then, get started and become the champion!`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Nintendo EPD",
    },
    117: {
        id: 117,
        name: "Fire Emblem Three Houses",
        category: "Nintendo Switch 1 Game",
        tags: ["Strategy", "Turn Based"],
        genre: "Strategy",
        price: 2495,
        rating: "★★★★☆",
        image: "",
        fullDescription: `A turn-based, tactical RPG that puts new twists on strategic battling
        As a professor, lead students in their academic lives and on the battlefield
        For the first time in series history, battalions of troops follow individual units to support them in battle
        Freely roam Garreg Mach Monastery, interact with students in a variety of ways over lunch,even to bond and gather intel
        As a female or male professor, you'll meet House Leaders and future rulers Edelgard, Dimitri, and Claude`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Intelligent Systems",
    },
    
118: {
        id: 118,
        name: "Advance Wars 1+2: Re-Boot Camp",
        category: "Nintendo Switch 1 Game",
        tags: ["Strategy", "Arcade"],
        genre: "Strategy",
        price: 2595,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Command an army in strategic, turn-based combat as a tactical adviser for the Orange Star Army. Your expertise is needed as you move to land, air, and naval units across the battlefield. Takedown enemy squads and capture towns and bases to secure victory and keep the peace. Keep an eye on the game-changing terrain and weather as you lead a variety of units across multiple maps. This remake features two campaigns that cover the events of Advance Wars and Advance Wars 2: Black Hole Rising!
        Fight alongside capable Commanding Officers - Defend your land with the help of Andy, Max, Sami, and other Commanding Officers, each with their own specialties and CO Powers. Andy can repair units, while Sami can boost the abilities of troops. Your opponents can use CO abilities of their own too! Throughout both campaigns, the COs you meet plays a critical role both on the battlefield and in the story
        Recruit some friends and see who the superior strategist is - When you aren’t busy keeping the peace in one of the two campaign stories, flex your army-commanding chops in Versus Mode*. Up to four players can battle on dozens of maps. Each player chooses a CO from either campaign and can strategically use their CO Powers to turn the tides of battle. Customize your combat with options like funds per allied base and fog of war`,
        publisher: "Nintendo",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "WayForward",
    },
    119: {
        id: 119,
        name: "Sid Meiers Civilization VI ",
        category: "Nintendo Switch 1 Game",
        tags: ["Strategy", "Turn Based"],
        genre: "Strategy",
        price: 1395,
        rating: "★★★★★",
        image: "",
        fullDescription: `Originally created by legendary game designer Sid Meier, Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Explore a new land, research technology, conquer your enemies, and go head-to-head with history's most renowned leaders as you attempt to build the greatest civilization the world has ever known.

        And now on Nintendo Switch, the quest to victory in Civilization VI can take place wherever, whenever.

        Civilization VI for Nintendo Switch includes the latest game updates and improvements and four pieces of additional content which adds four new civilizations, leaders, and scenarios:

        Vikings Scenario Pack

        Poland Civilization & Scenario Pack

        Australia Civilization & Scenario Pack

        Persia and Macedon Civilization & Scenario Pack`,
        publisher: "2K Games",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Firaxis Games",
    },
    120: {
        id: 120,
        name: "Mario + Rabbids Kingdom Battle",
        category: "Nintendo Switch 1 Game",
        tags: ["Strategy", "Role Playing"],
        genre: "Strategy",
        price: 1195,
        rating: "★★★★☆",
        image: "",
        fullDescription: `Winner of over 50 E3 awards and nominations
        Mario and Rabbids universes collide in this new adventure, exclusively on the Nintendo Switch system
        Mario, Luigi, Princess Peach, and Yoshi join forces with four Rabbis heroes with their own unique personalities
        Easy to play, difficult to master Solo and co op turn based combat is a fresh game play experience
        Battle with an arsenal of weapons through four new worlds filled with enemies, puzzles, and humorous fun the title rated Cartoon Violence, Comic Mischief, Mild Language`,
        publisher: "Ubisoft",
        platform: "Nintendo Switch",
        ageRating: "E - Everyone",
        developer: "Ubisoft",
    },
    121: {
        id: 122,
        name: "Into the Breach",
        category: "Nintendo Switch 1 Game",
        tags: ["Strategy", "Action"],
        genre: "Strategy",
        price: 1850,
        rating: "★★★★★",
        image: "",
        fullDescription: `Defend the Cities - Civilian buildings power your mechs. Defend them from the Vek and watch your fire
        Perfect Your Strategy - All enemy attacks are telegraphed in minimalistic, turn-based combat. Analyze your opponent's attack and come up with the perfect counter every turn
        Build the Ultimate Mech - Find powerful new weapons and unique pilots as you battle the Vek infestation across Corporate-Nation islands
        Another Chance - Failure is not an option. When you are defeated, send help back through time to save another timeline
        The remnants of human civilization are threatened by gigantic creatures breeding beneath the earth. You must control powerful mechs from the future to hold off this alien threat. Each attempt to save the world presents a new randomly generated challenge in this turn-based strategy game from the makers of FTL.`,
        publisher: "Subset Games",
        platform: "Nintendo Switch",
        ageRating: "E (Everyone)",
        developer: "Subset Games",
    },
    123: {
        id: 123,
        name: "Doki Doki Literature Club Plus!",
        category: "Nintendo Switch 1 Game",
        tags: ["Visual Novel", "Anime"],
        genre: "Visual Novel",
        price: 1850,
        rating: "★★★★★",
        image: "",
        fullDescription: `Enter the #1 Psychological Horror Experience!

        Welcome to a terrifying world of poetry and romance! Write poems for your crush and erase any mistakes along the way to ensure your perfect ending. Now’s your chance to discover why DDLC is one of the most beloved psychological horror games of the decade!

        You play as the main character, who reluctantly joins the Literature Club in search of a romantic interest. With every poem you write and every choice you make, you’ll charm your crush and begin to unfold the horrors of school romance. Do you have what it takes to crack the code of dating sims and get the perfect ending?

        Now, the original mind-shattering DDLC experience is packed with tons of new features and content exclusive to Doki Doki Literature Club Plus!`,
        publisher: "Serenity Forge",
        platform: "Nintendo Switch",
        ageRating: "M - Mature",
        developer: "Team Salvato",
    },
    124: {
        id: 124,
        name: " Steins;Gate Elite",
        category: "Nintendo Switch 1 Game",
        tags: ["Visual Novel", "Anime"],
        genre: "Visual Novel",
        price: 1695,
        rating: "★★★★★",
        image: "",
        fullDescription: `Now, as STEINS; GATE ELITE, the game is fully remastered with animated scenes from the anime, creating a perfectly new, immersive experience. follows a rag-tag band of tech-savvy young students who discover the means of changing the past via e-mail using a modified microwave. Their experiments in pushing the boundaries of time to begin to spiral out of control as they become entangled in a conspiracy surrounding SERN, the organization behind the Large Hadron Collider, and John Titor, who claims to be from a dystopian future.


        Fully Animated Adventure – Indulge in all the beautiful animation from 24 episodes of the STEINS;GATE anime
        A New Way to Time Leap – Experience the world of STEINS;GATE with this remastered, ultimate version that features newly animated sequences for certain endings
        Branching Storylines – Every choice you make has its own consequence, shifting the world line closer or farther from reaching 1% divergence, providing a multitude of animated endings`,
        publisher: "MAGES, Spike Chunsoft",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "MAGES",
    },
    125: {
        id: 125,
        name: "No Sleep For Kaname Date From AI The Somnium Files ",
        category: "Nintendo Switch 1 Game",
        tags: ["Visual Novel", "Anime"],
        genre: "Visual Novel",
        price: 2095,
        rating: "★★★★★",
        image: "",
        fullDescription: `Kaname Date and the AI-Ball, Aiba tackle a mysterious case and rescue Iris, an internet idol who has been forced to take part in a dangerous escape game.

        Examine crime scenes and listen to testimonies in "Investigation". Enter the dream worlds of suspects and key witnesses in "Somnium". Solve puzzles to break out of locked rooms in the new "Escape" sections.`,
        publisher: "Spike Chunsoft",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: "Spike Chunsoft",
    },
     126: {
        id: 126,
        name: "Clannad",
        category: "Nintendo Switch 1 Game",
        tags: ["Visual Novel", "Anime"],
        genre: "Visual Novel",
        price: 1850,
        rating: "★★★★★",
        image: "",
        fullDescription: `Step inside a heart-warming tale of love, family, and the ties that bind us all together. With gorgeous visuals and a haunting soundtrack, the classic romantic adventure game comes to Nintendo Switch™!

        Immerse yourself in the story and enjoy stunning visuals in full 1080 HD.
        All music and selected vocals available in Linear PCM 5.1ch surround sound-compatible AV amplifier system. Connect Nintendo Switch™ to a Linear PCM-compatible speaker system via an HDMI cable for a truly immersive audio experience. (Also compatible with 2-channel sound setups.)`,
        publisher: "Key, Prototype",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: " Visual Arts, Prototype",
    },
     127: {
        id: 127,
        name: "The Great Ace Attorney Chronicles",
        category: "Nintendo Switch 1 Game",
        tags: ["Visual Novel", "Anime"],
        genre: "Visual Novel",
        price: 2495,
        rating: "★★★★★",
        image: "",
        fullDescription: `With all the fun and drama of the Ace Attorney series set against the backdrop of Victorian-era Britain and Japan, there's sure to be no "Objection!" to the adventures of Ryunosuke Naruhodo as he turns the courtroom upside down!

        Featuring an intriguing overarching mystery spanning two games, it's the most engrossing story in the series yet!

        The Great Ace Attorney Adventures
        The Empire of Japan – after opening its doors, a push for cultural transformation brought great waves of Western influence to the Far Eastern island nation. The revolution washed over the land, making life in the capital exciting and unsettling. It was a period of great change, and some were swept away by the tide.`,
        publisher: " Capcom",
        platform: "Nintendo Switch",
        ageRating: "T - Teen",
        developer: " Capcom",
    },
 
};


// Slideshow functionality for multiple slideshows
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideTimer1;
let slideTimer2;

// Populate product from database
function populateProductFromDatabase(productId, cardSelector) {
    const product = products[productId];
    if (!product) return;
    
    const card = document.querySelector(cardSelector);
    if (!card) return;
    
    // Update image
    card.querySelector('img').src = product.image;
    card.querySelector('img').alt = product.name;
    
    // Update name
    card.querySelector('h3').textContent = product.name;
    
    // Update genre tags
    const genreTags = card.querySelector('.genre-tags');
    genreTags.innerHTML = product.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Update rating
    card.querySelector('.rating').textContent = product.rating;
    
    // Update price
    card.querySelector('.price').textContent = `₱${product.price.toLocaleString()}.00`;
}

// Initialize slideshows
document.addEventListener('DOMContentLoaded', function() {
    initSlideshows();
    // Populate all products from database automatically
    Object.keys(products).forEach(productId => {
        populateProductFromDatabase(productId, `.product-card[data-product-id="${productId}"]`);
    });
});

function initSlideshows() {
    const slideshowSections = document.querySelectorAll('.slideshow-section');
    
    if (slideshowSections.length > 0) {
        showSlides1(slideIndex1);
        startAutoSlide1();
    }
    
    if (slideshowSections.length > 1) {
        showSlides2(slideIndex2);
        startAutoSlide2();
    }
}

// First slideshow (top banner)
function currentSlide(n) {
    clearTimeout(slideTimer1);
    showSlides1(slideIndex1 = n);
    startAutoSlide1();
}

function showSlides1(n) {
    const slideshowSections = document.querySelectorAll('.slideshow-section');
    if (slideshowSections.length === 0) return;
    
    const firstSlideshow = slideshowSections[0];
    let slides = firstSlideshow.querySelectorAll(".slide");
    let dots = firstSlideshow.querySelectorAll(".dot");
    
    if (n > slides.length) {
        slideIndex1 = 1;
    }
    if (n < 1) {
        slideIndex1 = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    if (slides[slideIndex1 - 1]) {
        slides[slideIndex1 - 1].classList.add("active");
    }
    if (dots[slideIndex1 - 1]) {
        dots[slideIndex1 - 1].classList.add("active");
    }
}

function startAutoSlide1() {
    slideTimer1 = setTimeout(function() {
        slideIndex1++;
        showSlides1(slideIndex1);
        startAutoSlide1();
    }, 5000);
}

// Second slideshow (Nintendo banner)
function currentSlide2(n) {
    clearTimeout(slideTimer2);
    showSlides2(slideIndex2 = n);
    startAutoSlide2();
}

function showSlides2(n) {
    const slideshowSections = document.querySelectorAll('.slideshow-section');
    if (slideshowSections.length < 2) return;
    
    const secondSlideshow = slideshowSections[1];
    let slides = secondSlideshow.querySelectorAll(".slide");
    let dots = secondSlideshow.querySelectorAll(".dot");
    
    if (n > slides.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    if (slides[slideIndex2 - 1]) {
        slides[slideIndex2 - 1].classList.add("active");
    }
    if (dots[slideIndex2 - 1]) {
        dots[slideIndex2 - 1].classList.add("active");
    }
}

function startAutoSlide2() {
    slideTimer2 = setTimeout(function() {
        slideIndex2++;
        showSlides2(slideIndex2);
        startAutoSlide2();
    }, 5000);
}

// Featured Products Category Filter
document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const container = document.getElementById('featured-products');
    const allCards = [...container.children]; // clone list

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {

            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');

            // Clear the container
            container.innerHTML = '';

            // Insert only matching cards
            allCards.forEach(card => {
                if (card.getAttribute('data-category') === selectedCategory) {
                    container.appendChild(card);
                }
            });

            // Reset scroll
            container.scrollLeft = 0;
        });
    });
});

// Product Carousel Navigation
function scrollCarousel(carouselId, direction) {
    const container = document.getElementById(carouselId);
    const scrollAmount = 250; // Adjust based on card width + gap
    
    if (direction === 1) {
        // Scroll right
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    } else {
        // Scroll left
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Touch/Swipe support for mobile
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.products-container');
    
    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - carousel.offsetLeft;
            touchScrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - touchStartX) * 2;
            carousel.scrollLeft = touchScrollLeft - walk;
        });
    });
});

// Add cursor style to carousels
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.products-container');
    carousels.forEach(carousel => {
        carousel.style.cursor = 'grab';
    });
});

// Smooth scroll behavior for all carousels
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.products-container');
    containers.forEach(container => {
        container.style.scrollBehavior = 'smooth';
    });
});

// Optional: Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    const featuredContainer = document.getElementById('featured-products');
    const newArrivalsContainer = document.getElementById('new-arrivals');
    const popularContainer = document.getElementById('popular');
    
    // Check if any carousel is in focus
    if (document.activeElement.closest('.products-carousel')) {
        if (e.key === 'ArrowLeft') {
            const container = document.activeElement.closest('.products-carousel').querySelector('.products-container');
            container.scrollBy({ left: -250, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight') {
            const container = document.activeElement.closest('.products-carousel').querySelector('.products-container');
            container.scrollBy({ left: 250, behavior: 'smooth' });
        }
    }
});

export const STONES_AND_MEDALLIONS = [
  "Kokiri-Emerald",
  "Goron-Ruby",
  "Zora-Sapphire",
  "Light-Medallion",
  "Forest-Medallion",
  "Fire-Medallion",
  "Water-Medallion",
  "Shadow-Medallion",
  "Spirit-Medallion"
];

export const SONGS = [
  "Bolero-of-Fire",
  "Eponas-Song",
  "Farores-Wind",
  "Minuet-of-Forest",
  "Nocturne-of-Shadow",
  "Prelude-of-Light",
  "Requiem-of-Spirit",
  "Sarias-Song",
  "Serenade-of-Water",
  "Song-of-Storms",
  "Song-of-Time",
  "Suns-Song",
  "Zeldas-Lullaby"
];

export const MAJOR_ITEMS = [
  "Biggoron-Sword",
  "Bomb-Bag",
  "Boomerang",
  "Bottle-with-Blue-Potion",
  "Bottle-with-Letter",
  "Bottle-with-Red-Potion",
  "Bottle",
  "Bow",
  "Deku-Nut-Capacity",
  "Deku-Shield",
  "Deku-Stick-Capacity",
  "Dins-Fire",
  "Double-Defense",
  "Fire-Arrows",
  "Goron-Tunic",
  "Hammer",
  "Heart-Container",
  "Hover-Boots",
  "Hylian-Shield",
  "Ice-Arrows",
  "Iron-Boots",
  "Kokiri-Sword",
  "Lens-of-Truth",
  "Light-Arrows",
  "Magic-Meter",
  "Mirror-Shield",
  "Nayrus-Love",
  "Ocarina",
  "Piece-of-Heart-(Treasure-Chest-Game)",
  "Piece-of-Heart",
  "Pocket-Egg",
  "Progressive-Hookshot",
  "Progressive-Scale",
  "Progressive-Strength-Upgrade",
  "Progressive-Wallet",
  "Recovery-Heart",
  "Slingshot",
  "Stone-of-Agony",
  "Weird-Egg",
  "Zora-Tunic"
];

export const JUNK = [
  "Arrows-(10)",
  "Arrows-(30)",
  "Arrows-(5)",
  "Bombchus-(10)",
  "Bombchus-(20)",
  "Bombchus-(5)",
  "Bombs-(10)",
  "Bombs-(20)",
  "Bombs-(5)",
  "Deku-Nuts-(10)",
  "Deku-Nuts-(5)",
  "Deku-Seeds-(30)",
  "Deku-Stick-(1)",
  "Ice-Trap",
  "Rupee-(1)",
  "Rupees-(20)",
  "Rupees-(200)",
  "Rupees-(5)",
  "Rupees-(50)"
];

export const ITEMS = [...STONES_AND_MEDALLIONS, ...SONGS, ...MAJOR_ITEMS];

export const ITEM_COPIES = {
  "Bow": 3,
  "Deku-Nut-Capacity": 3,
  "Deku-Stick-Capacity": 3,
  "Heart-Container": 8,
  "Hylian-Shield": 2,
  "Ocarina": 2,
  "Piece-of-Heart": 35,
  "Progressive-Hookshot": 2,
  "Progressive-Scale": 2,
  "Progressive-Strength-Upgrade": 3,
  "Progressive-Wallet": 2,
  "Slingshot": 3
};

export const JUNK_POOL = {
  "Arrows (10)": 8,
  "Arrows (30)": 6,
  "Arrows (5)": 6,
  "Bombchus (10)": 3,
  "Bombchus (20)": 1,
  "Bombchus (5)": 1,
  "Bombs (10)": 2,
  "Bombs (20)": 2,
  "Bombs (5)": 4,
  "Deku Nuts (10)": 1,
  "Deku Nuts (5)": 2,
  "Deku Seeds (30)": 3,
  "Deku Shield": 4,
  "Deku Stick (1)": 2,
  "Ice Trap": 6,
  "Recovery Heart": 11,
  "Rupee (1)": 1,
  "Rupees (20)": 8,
  "Rupees (200)": 6,
  "Rupees (5)": 19,
  "Rupees (50)": 7
};

export const LOCATIONS = {
  "Misc":
  {
    "Links Pocket":
    [
      "Links-Pocket"
    ]
  },

  "Bosses":
  {
    "Once Beaten":
    [
      "Queen-Gohma",
      "King-Dodongo",
      "Barinade",
      "Phantom-Ganon",
      "Volvagia",
      "Morpha",
      "Bongo-Bongo",
      "Twinrova",
    ]
  },

  "The Forest":
  {
    "Kokiri Forest":
    [
      "Kokiri-Sword-Chest",
      "Mido-Chest-Top-Left",
      "Mido-Chest-Top-Right",
      "Mido-Chest-Bottom-Left",
      "Mido-Chest-Bottom-Right",
      "Kokiri-Forest-Storms-Grotto-Chest",
    ],

    "Lost Woods":
    [
      "Lost-Woods-Generic-Grotto-Chest",
      "Deku-Theater-Skull-Mask",
      "Deku-Theater-Mask-of-Truth",
      "Skull-Kid",
      "Ocarina-Memory-Game",
      "Target-in-Woods",
      "LW-Deku-Scrub-Deku-Stick-Upgrade",
      "Gift-from-Saria",
    ],

    "Sacred Forest Meadow":
    [
      "LW-Grotto-Deku-Scrub-Deku-Nut-Upgrade",
      "Wolfos-Grotto-Chest",
      "Song-from-Saria",
      "Sheik-Forest-Song",
    ],

    "Deku Tree":
    [
      "Deku-Tree-Lobby-Chest",
      "Deku-Tree-Compass-Chest",
      "Deku-Tree-Compass-Room-Side-Chest",
      "Deku-Tree-Basement-Chest",
      "Deku-Tree-Slingshot-Chest",
      "Deku-Tree-Slingshot-Room-Side-Chest",
      "Queen-Gohma-Heart"
    ],

    "Forest Temple":
    [
      "Forest-Temple-First-Chest",
      "Forest-Temple-Chest-Behind-Lobby",
      "Forest-Temple-Outside-Hookshot-Chest",
      "Forest-Temple-Well-Chest",
      "Forest-Temple-Map-Chest",
      "Forest-Temple-Falling-Room-Chest",
      "Forest-Temple-Block-Push-Chest",
      "Forest-Temple-Boss-Key-Chest",
      "Forest-Temple-Floormaster-Chest",
      "Forest-Temple-Bow-Chest",
      "Forest-Temple-Red-Poe-Chest",
      "Forest-Temple-Blue-Poe-Chest",
      "Forest-Temple-Near-Boss-Chest",
      "Phantom-Ganon-Heart"
    ]
  },

  "Death Mountain":
  {
    "Death Mountain Trail":
    [
      "Mountain-Storms-Grotto-Chest",
      "Mountain-Summit-Fairy-Reward",
      "Death-Mountain-Bombable-Chest",
      "DM-Trail-Freestanding-PoH",
      "Biggoron",
    ],

    "Goron City":
    [
      "Goron-City-Leftmost-Maze-Chest",
      "Goron-City-Left-Maze-Chest",
      "Goron-City-Right-Maze-Chest",
      "Goron-City-Pot-Freestanding-PoH",
      "Rolling-Goron-as-Child",
      "Link-the-Goron",
      "Darunias-Joy",
    ],

    "Dodongos Cavern":
    [
      "Dodongos-Cavern-Map-Chest",
      "Dodongos-Cavern-Compass-Chest",
      "Dodongos-Cavern-Bomb-Flower-Platform",
      "Dodongos-Cavern-Bomb-Bag-Chest",
      "Dodongos-Cavern-End-of-Bridge-Chest",
      "Chest-Above-King-Dodongo",
      "King-Dodongo-Heart"
    ],

    "Death Mountain Crater":
    [
      "DM-Crater-Wall-Freestanding-PoH",
      "DM-Crater-Volcano-Freestanding-PoH",
      "Top-of-Crater-Grotto-Chest",
      "Crater-Fairy-Reward",
      "Sheik-in-Crater",
    ],

    "Fire Temple":
    [
      "Fire-Temple-Chest-Near-Boss",
      "Fire-Temple-Fire-Dancer-Chest",
      "Fire-Temple-Boss-Key-Chest",
      "Fire-Temple-Big-Lava-Room-Open-Chest",
      "Fire-Temple-Big-Lava-Room-Bombable-Chest",
      "Fire-Temple-Boulder-Maze-Lower-Chest",
      "Fire-Temple-Boulder-Maze-Upper-Chest",
      "Fire-Temple-Boulder-Maze-Side-Room",
      "Fire-Temple-Boulder-Maze-Bombable-Pit",
      "Fire-Temple-Scarecrow-Chest",
      "Fire-Temple-Map-Chest",
      "Fire-Temple-Compass-Chest",
      "Fire-Temple-Highest-Goron-Chest",
      "Fire-Temple-Megaton-Hammer-Chest",
      "Volvagia-Heart"
    ],
  },

  "Zora's River":
  {
    "Zora's River":
    [
      "Zora-River-Plateau-Open-Grotto-Chest",
      "Frog-Ocarina-Game",
      "Frogs-in-the-Rain",
      "Zora-River-Lower-Freestanding-PoH",
      "Zora-River-Upper-Freestanding-PoH",
    ],

    "Zora's Domain":
    [
      "Diving-Minigame",
      "Zoras-Domain-Torch-Run",
      "King-Zora-Thawed",
    ],

    "Zora's Fountain":
    [
      "Zoras-Fountain-Iceberg-Freestanding-PoH",
      "Zoras-Fountain-Bottom-Freestanding-PoH",
      "Zoras-Fountain-Fairy-Reward",
    ],

    "Ice Cavern":
    [
      "Ice-Cavern-Map-Chest",
      "Ice-Cavern-Compass-Chest",
      "Ice-Cavern-Iron-Boots-Chest",
      "Ice-Cavern-Freestanding-PoH",
      "Sheik-in-Ice-Cavern",
    ],

    "Jabu Jabu's Belly":
    [
      "Boomerang-Chest",
      "Jabu-Jabus-Belly-Map-Chest",
      "Jabu-Jabus-Belly-Compass-Chest",
      "Barinade-Heart"
    ],
  },

  "Kakariko":
  {
    "Kakariko Village":
    [
      "Man-on-Roof",
      "Anju-as-Adult",
      "Anjus-Chickens",
      "10-Gold-Skulltula-Reward",
      "20-Gold-Skulltula-Reward",
      "30-Gold-Skulltula-Reward",
      "40-Gold-Skulltula-Reward",
      "50-Gold-Skulltula-Reward",
      "Impa-House-Freestanding-PoH",
      "Windmill-Freestanding-PoH",
      "Adult-Shooting-Gallery",
      "Redead-Grotto-Chest",
      "Kakariko-Back-Grotto-Chest",
      "Sheik-in-Kakariko",
      "Song-at-Windmill",
    ],

    "Bottom of the Well":
    [
      "Bottom-of-the-Well-Front-Left-Hidden-Wall",
      "Bottom-of-the-Well-Front-Center-Bombable",
      "Bottom-of-the-Well-Right-Bottom-Hidden-Wall",
      "Bottom-of-the-Well-Center-Large-Chest",
      "Bottom-of-the-Well-Center-Small-Chest",
      "Bottom-of-the-Well-Back-Left-Bombable",
      "Bottom-of-the-Well-Freestanding-Key",
      "Bottom-of-the-Well-Defeat-Boss",
      "Bottom-of-the-Well-Invisible-Chest",
      "Bottom-of-the-Well-Underwater-Front-Chest",
      "Bottom-of-the-Well-Underwater-Left-Chest",
      "Bottom-of-the-Well-Basement-Chest",
      "Bottom-of-the-Well-Locked-Pits",
      "Bottom-of-the-Well-Behind-Right-Grate"
    ],

    "Graveyard":
    [
      "Graveyard-Freestanding-PoH",
      "Gravedigging-Tour",
      "Shield-Grave-Chest",
      "Heart-Piece-Grave-Chest",
      "Composer-Grave-Chest",
      "Hookshot-Chest",
      "Dampe-Race-Freestanding-PoH",
      "Song-from-Composer-Grave",
    ],

    "Shadow Temple":
    [
      "Shadow-Temple-Map-Chest",
      "Shadow-Temple-Hover-Boots-Chest",
      "Shadow-Temple-Compass-Chest",
      "Shadow-Temple-Early-Silver-Rupee-Chest",
      "Shadow-Temple-Invisible-Blades-Visible-Chest",
      "Shadow-Temple-Invisible-Blades-Invisible-Chest",
      "Shadow-Temple-Falling-Spikes-Lower-Chest",
      "Shadow-Temple-Falling-Spikes-Upper-Chest",
      "Shadow-Temple-Falling-Spikes-Switch-Chest",
      "Shadow-Temple-Invisible-Spikes-Chest",
      "Shadow-Temple-Freestanding-Key",
      "Shadow-Temple-Wind-Hint-Chest",
      "Shadow-Temple-After-Wind-Enemy-Chest",
      "Shadow-Temple-After-Wind-Hidden-Chest",
      "Shadow-Temple-Spike-Walls-Left-Chest",
      "Shadow-Temple-Boss-Key-Chest",
      "Shadow-Temple-Hidden-Floormaster-Chest",
      "Bongo-Bongo-Heart"
    ]
  },

  "Lake Hylia":
  {
    "Lake Hylia":
    [
      "Underwater-Bottle",
      "Lake-Hylia-Sun",
      "Lake-Hylia-Freestanding-PoH",
      "Diving-in-the-Lab",
      "Child-Fishing",
      "Adult-Fishing",
    ],

    "Water Temple":
    [
      "Water-Temple-Map-Chest",
      "Water-Temple-Compass-Chest",
      "Water-Temple-Cracked-Wall-Chest",
      "Water-Temple-Torches-Chest",
      "Water-Temple-Dragon-Chest",
      "Water-Temple-Central-Bow-Target-Chest",
      "Water-Temple-Boss-Key-Chest",
      "Water-Temple-Central-Pillar-Chest",
      "Water-Temple-Dark-Link-Chest",
      "Water-Temple-River-Chest",
      "Morpha-Heart"
    ]
  },

  "The Desert":
  {
    "Gerudo Valley":
    [
      "Gerudo-Valley-Waterfall-Freestanding-PoH",
      "Gerudo-Valley-Crate-Freestanding-PoH",
      "Gerudo-Valley-Hammer-Rocks-Chest",
    ],

    "Gerudo Fortress":
    [
      "Gerudo-Fortress-Rooftop-Chest",
      "Horseback-Archery-1000-Points",
      "Horseback-Archery-1500-Points",
    ],

    "Gerudo Training Grounds":
    [
      "Gerudo-Training-Grounds-Lobby-Left-Chest",
      "Gerudo-Training-Grounds-Lobby-Right-Chest",
      "Gerudo-Training-Grounds-Stalfos-Chest",
      "Gerudo-Training-Grounds-Beamos-Chest",
      "Gerudo-Training-Grounds-Hidden-Ceiling-Chest",
      "Gerudo-Training-Grounds-Maze-Path-First-Chest",
      "Gerudo-Training-Grounds-Maze-Path-Second-Chest",
      "Gerudo-Training-Grounds-Maze-Path-Third-Chest",
      "Gerudo-Training-Grounds-Maze-Path-Final-Chest",
      "Gerudo-Training-Grounds-Maze-Right-Central-Chest",
      "Gerudo-Training-Grounds-Maze-Right-Side-Chest",
      "Gerudo-Training-Grounds-Freestanding-Key",
      "Gerudo-Training-Grounds-Underwater-Silver-Rupee-Chest",
      "Gerudo-Training-Grounds-Hammer-Room-Clear-Chest",
      "Gerudo-Training-Grounds-Hammer-Room-Switch-Chest",
      "Gerudo-Training-Grounds-Eye-Statue-Chest",
      "Gerudo-Training-Grounds-Near-Scarecrow-Chest",
      "Gerudo-Training-Grounds-Before-Heavy-Block-Chest",
      "Gerudo-Training-Grounds-Heavy-Block-First-Chest",
      "Gerudo-Training-Grounds-Heavy-Block-Second-Chest",
      "Gerudo-Training-Grounds-Heavy-Block-Third-Chest",
      "Gerudo-Training-Grounds-Heavy-Block-Fourth-Chest"
    ],

    "Haunted Wasteland":
    [
      "Haunted-Wasteland-Structure-Chest",
    ],

    "Desert Colossus":
    [
      "Colossus-Freestanding-PoH",
      "Desert-Colossus-Fairy-Reward",
      "Sheik-at-Colossus",
    ],

    "Spirit Temple":
    [
      "Spirit-Temple-Child-Left-Chest",
      "Spirit-Temple-Child-Right-Chest",
      "Spirit-Temple-Child-Climb-East-Chest",
      "Spirit-Temple-Child-Climb-North-Chest",
      "Spirit-Temple-Compass-Chest",
      "Spirit-Temple-Early-Adult-Right-Chest",
      "Spirit-Temple-First-Mirror-Right-Chest",
      "Spirit-Temple-First-Mirror-Left-Chest",
      "Spirit-Temple-Map-Chest",
      "Spirit-Temple-Sun-Block-Room-Chest",
      "Spirit-Temple-Statue-Hand-Chest",
      "Spirit-Temple-NE-Main-Room-Chest",
      "Silver-Gauntlets-Chest",
      "Mirror-Shield-Chest",
      "Spirit-Temple-Near-Four-Armos-Chest",
      "Spirit-Temple-Hallway-Left-Invisible-Chest",
      "Spirit-Temple-Hallway-Right-Invisible-Chest",
      "Spirit-Temple-Boss-Key-Chest",
      "Spirit-Temple-Topmost-Chest",
      "Twinrova-Heart"
    ],
  },

  "Hyrule Castle":
  {
    "Hyrule Market":
    [
      "10-Big-Poes",
      "Child-Shooting-Gallery",
      "Bombchu-Bowling-Bomb-Bag",
      "Bombchu-Bowling-Piece-of-Heart",
      "Treasure-Chest-Game",
      "Dog-Lady",
    ],

    "Hyrule Castle":
    [
      "Hyrule-Castle-Fairy-Reward",
      "Zelda",
      "Malon-Egg",
      "Impa-at-Castle",
    ],

    "Temple of Time":
    [
      "Sheik-at-Temple",
    ],

    "Ganon's Castle":
    [
      "Ganons-Castle-Fairy-Reward",
    ],

    "Inside Ganon's Castle":
    [
      "Ganons-Castle-Forest-Trial-Chest",
      "Ganons-Castle-Water-Trial-Left-Chest",
      "Ganons-Castle-Water-Trial-Right-Chest",
      "Ganons-Castle-Shadow-Trial-First-Chest",
      "Ganons-Castle-Shadow-Trial-Second-Chest",
      "Ganons-Castle-Spirit-Trial-First-Chest",
      "Ganons-Castle-Spirit-Trial-Second-Chest",
      "Ganons-Castle-Light-Trial-First-Left-Chest",
      "Ganons-Castle-Light-Trial-Second-Left-Chest",
      "Ganons-Castle-Light-Trial-Third-Left-Chest",
      "Ganons-Castle-Light-Trial-First-Right-Chest",
      "Ganons-Castle-Light-Trial-Second-Right-Chest",
      "Ganons-Castle-Light-Trial-Third-Right-Chest",
      "Ganons-Castle-Light-Trial-Invisible-Enemies-Chest",
      "Ganons-Castle-Light-Trial-Lullaby-Chest",
      "Ganons-Tower-Boss-Key-Chest",
    ]
  },

  "Hyrule Field":
  {
    "Hyrule Field":
    [
      "Remote-Southern-Grotto-Chest",
      "Field-Near-Lake-Outside-Fence-Grotto-Chest",
      "HF-Grotto-Deku-Scrub-Piece-of-Heart",
      "Field-West-Castle-Town-Grotto-Chest",
      "Tektite-Grotto-Freestanding-PoH",
      "Ocarina-of-Time",
      "Song-from-Ocarina-of-Time",
    ],

    "Lon Lon Ranch":
    [
      "Talons-Chickens",
      "Lon-Lon-Tower-Freestanding-PoH",
      "Song-from-Malon",
    ]
  }

};

export const REGION_COLORS = {
  "Misc": ["white", '#949494'],
  "Bosses": ["black", '#252525'],
  "The Forest": ["#138510", "#1aad16"],
  "Death Mountain": ["#a91a05", "#c32109"],
  "Zora's River": ["#3ad7f9", "#7ce1f7"],
  "Kakariko": ["#b348d2", "#cd5bee"],
  "Lake Hylia": ["#0c4e9b", "#0c5cb9"],
  "The Desert": ["#cc7025", "#e37d2a"],
  "Hyrule Castle": ["#cccccc", "#eeeeee"],
  "Hyrule Field": ["#eeff43", "#f4ff82"]
};

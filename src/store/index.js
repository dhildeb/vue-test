import { getRandomDmgType } from "@/utils/getRandomDmgType"
import { createStore } from 'vuex'

const store = createStore({
  state: {
    // all monster stats: {name: 'any', classType: '', race: '', img: '', spells: [], equipment: [], dmgType: '', hp: 5, magic: 0, luck: 0, strength: 1, dodge: 0, thorns: 0, actions: 1, physicalResistance: 0, magicResistance: 0, lifeSteal:  0, absorb: '', level: 1, loot: {gold: 0, items: []}, exp: 50}
      monsters: [
        //0
        [{name: 'goblin', actions: 1, strength: 2, hp: 7, loot: {gold: 5, items: ['dagger']}, exp: 50, dodge: 10, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fgoblin.png?alt=media&token=92f9a971-2733-42a9-b616-563ffcbe86dc'},
        {name: 'bullywug', actions: 2, strength: 1, hp: 11, loot: {gold: 5, items: ['spear']}, exp: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fbullywug.png?alt=media&token=b29b3455-f4ca-4c97-918c-fd20fb8946d0'},
        {name: 'giant bat', actions: 1, strength: 3, hp: 15, loot: {gold: 5, items: []}, exp: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fgiant-bat.png?alt=media&token=09a1bbb5-aea2-42ff-afbd-34c420a23b52'},
        {name: 'giant rat', actions: 1, strength: 1, hp: 7, loot: {gold: 2, items: []}, exp: 25, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fgiant-rat.png?alt=media&token=c09b17a6-58da-4efc-b5e0-77f8ff3d5323'},
        {name: 'kuo toa', actions: 1, strength: 2, hp: 18, loot: {gold: 5, items: ['spear', 'sticky shield']}, exp: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fkuo-toa.png?alt=media&token=d4184eda-e4f2-4c13-8015-74abea6980ae'},
        {name: 'seedling', actions: 1, strength: 2, hp: 8, thorns: 1, loot: {gold: 5, items: []}, exp: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fseedling.png?alt=media&token=4e357d83-5c08-45d2-940e-7ae302b26366'},
        {name: 'skeleton', actions: 1, strength: 4, hp: 9, loot: {gold: 5, items: ['shortsword', 'shortbow']}, exp: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fundead-barbarian.png?alt=media&token=8f7d9113-6d7f-4c60-b74e-a30cf4cb9ed5'},
        ],
        //1
        [{name: 'fire snake', actions: 2, strength: 3, hp: 22, loot: {gold: 20, items: ['fire snake hide']}, absorb: 'fire', dmgType: 'fire', thorns: 5, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Ffiresnake.png?alt=media&token=7a25d2f1-6c6d-4508-a200-57f324e360ba'},
        {name: 'ghoul', actions: 1, strength: 8, hp: 22, loot: {gold: 20, items: []}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fghoul.png?alt=media&token=c5ac81a3-433a-4890-8272-5a4daa4d1b4d'},
        {name: 'bugbear', actions: 1, strength: 9, hp: 27, loot: {gold: 20, items: ['javelin', 'morningstar']}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fbugbear.png?alt=media&token=811edeb1-3376-4259-a175-089015c51cb9'},
        {name: 'giant spider', actions: 1, strength: 16, hp: 26, loot: {gold: 20, items: []}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fgiant-spider.png?alt=media&token=944f50cb-b41b-4865-9a28-9078cd65540c'},
        {name: 'imp', actions: 1, strength: 15, magicResistance: 25, physicalResistance: 25, hp: 10, absorb: 'fire', dmgType: 'fire', loot: {gold: 20, items: []}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fimp.png?alt=media&token=f2938d88-c399-4e6a-a6a4-1a99555bef25'},
        {name: 'multi-armed skeleton', actions: 4, strength: 3, hp: 26, loot: {gold: 20, items: []}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fmulti-armed-skeleton.png?alt=media&token=33e98e78-25d8-4582-aff0-55b2588178ef'},
        {name: 'myconid', actions: 2, strength: 8, hp: 22, dmgType: 'poison', loot: {gold: 10, items: []}, exp: 100, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fmyconid.png?alt=media&token=dd0ae0f4-3860-4588-a876-738efb16c0be'},
        {name: 'ooze', actions: 1, strength: 11, hp: 22, thorns: 3, magicResistance: 25, dmgType: 'acid', loot: {gold: 10, items: []}, exp: 100, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fooze.png?alt=media&token=6d011360-3e02-42f8-b960-1ad823fbd0ab'},
        {name: 'orc', actions: 1, strength: 7, hp: 15, loot: {gold: 10, items: ['greataxe', 'javelin']}, exp: 100, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Forc.png?alt=media&token=f011fcb1-d057-490c-b599-350229676f87'},
        {name: 'shadow', actions: 1, strength: 9, lifeSteal: 50, physicalResistance: 50, absorb: 'necrotic', vulnerabilities: ['radiant'], dmgType: 'necrotic', hp: 16, loot: {gold: 10, items: []}, exp: 100, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fshadow.png?alt=media&token=9442e3ed-56f0-4782-b2ce-62d14975eeda'},
        {name: 'scarecrow', actions: 2, strength: 6, physicalResistance: 20, hp: 36, loot: {gold: 20, items: []}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fscarecrow.png?alt=media&token=b005ab31-b378-4cef-b1af-10fdf8ba91c2'},
        {name: 'pseudodragon', actions: 2, strength: 5, magicResistance: 25, physicalResistance: 25, hp: 30, dmgType: 'cold', loot: {gold: 20, items: []}, exp: 200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpseudodragon.png?alt=media&token=0e439993-9b35-42f0-99ff-9483d8bfbd25'},
        ],
        //2
        [{name: 'gelatinous cube', classType: '', race: 'ooze', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fgelatinous-cube.png?alt=media&token=c6d9255b-de4f-4fe8-9e5d-66464bd29119', spells: [], equipment: [], dmgType: 'acid', hp: 84, magic: 0, luck: 0, strength: 10, dodge: 0, thorns: 10, actions: 1, physicalResistance: 0, magicResistance: 0, lifeSteal: 25, absorb: 'acid', level: 2, loot: {gold: 45, items: []}, exp: 450},
        {name: 'gibbering mouther', classType: '', race: 'aberration', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fmouther.png?alt=media&token=7927b7ad-4059-410c-b21f-fc57a5485955', spells: [], equipment: [], dmgType: 'acid', hp: 67, magic: 0, luck: 0, strength: 17, dodge: 25, thorns: 0, actions: 1, physicalResistance: 0, magicResistance: 0, lifeSteal: 0, absorb: '', level: 2, loot: {gold: 45, items: []}, exp: 450},
        {name: 'nothic', classType: '', race: 'aberration', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fnothic.png?alt=media&token=a4f68856-cc22-45df-90ba-11e3142ab915', spells: [], equipment: [], dmgType: 'magic', hp: 45, magic: 0, luck: 0, strength: 8, dodge: 0, thorns: 0, actions: 2, physicalResistance: 0, magicResistance: 0, lifeSteal: 0, absorb: '', level: 2, loot: {gold: 45, items: []}, exp: 450},
        {name: 'ogre', classType: '', race: 'giant', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fogre.png?alt=media&token=dc59cd31-1642-455c-910c-989836b155eb', spells: [], equipment: [], dmgType: '', hp: 59, magic: 0, luck: 0, strength: 12, dodge: 0, thorns: 0, actions: 1, physicalResistance: 0, magicResistance: 0, lifeSteal: 0, absorb: '', level: 2, loot: {gold: 45, items: ['greatclub', 'javelin']}, exp: 450},
        ],
        //3
        [{name: 'displacer beast', dodge: 50, actions: 2, strength: 7, hp: 85, loot: {gold: 70, items: ['displacer cloak']}, exp: 700, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fdisplacer-beast.png?alt=media&token=c177fa03-5378-4692-be8b-e52c794599c9'},
        {name: 'yuan-ti malison', actions: 2, strength: 10, absorb: 'poison', hp: 66, dmgType: 'poison', loot: {gold: 70, items: ['scimitar']}, exp: 700, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fsnakeman.png?alt=media&token=5de8dc0d-7345-4ee3-9085-bf3e58b0b073'},
        {name: 'spectator', actions: 2, strength: 16, hp: 39, absorb: 'magic', loot: {gold: 70, items: []}, exp: 700, dmgType: 'magic', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fspectator.png?alt=media&token=c79ddd43-f172-41f7-a1de-bc600ae4b654'},
        {name: 'werewolf', actions: 2, strength: 7, hp: 58, absorb: 'melee', loot: {gold: 70, items: ['handaxe', 'shortsword']}, exp: 700, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fwolfman.png?alt=media&token=fde92071-b1ab-4372-bb41-cfdd574aa1ec'},
        ],
        //4
        [{name: 'ettin', actions: 2, strength: 14, hp: 85, loot: {gold: 110, items: ['battleaxe', 'morningstar']}, exp: 1100, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fettin.png?alt=media&token=d08052f2-8965-460f-b745-2a3d04890b0a'},
        {name: 'flameskull', actions: 2, strength: 10, hp: 40, loot: {gold: 110, items: []}, exp: 1100, absorb: 'magic', dmgType: 'magic', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fflameskull.png?alt=media&token=c580f87e-37a5-426f-868d-2283d230adf5'},
        {name: 'young phoenix', actions: 1, strength: 26, hp: 45, loot: {gold: 110, items: []}, exp: 1100, absorb: 'fire', dmgType: 'fire', physicalResistance: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpheonix.png?alt=media&token=a8d21857-1c00-4c11-ad1b-6bb5456a5220'},
        ],
        //5
        [{name: 'barbed devil', actions: 3, strength: 10, hp: 110, loot: {gold: 180, items: []}, exp: 1800, thorns: 5, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fbarbed-devil.png?alt=media&token=b3c691e9-93f9-45ca-867d-30965616026a'},
        {name: 'flesh golem', actions: 2, strength: 13, hp: 93, loot: {gold: 180, items: []}, exp: 1800, absorb: 'lightning', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fflesh-golem.png?alt=media&token=4c36dfad-d0b6-434f-9fd9-97976ef0d97d'},
        {name: 'troll', actions: 3, strength: 9, lifeSteal: 40, regen: 10, hp: 84, loot: {gold: 180, items: []}, exp: 1800, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Ftroll.png?alt=media&token=17bcb389-591b-4404-bfba-516529ee9e11'},
        ],
        //6
        [{name: 'sorcerer beast', actions: 1, strength: 45, hp: 58, loot: {gold: 230, items: []}, exp: 2300, dmgType: 'magic', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fsorcerer-beastman.png?alt=media&token=b8e28940-d354-45c6-a433-d90979e7ae22'}
        ],
        //7
        [{name: 'shield guardian', actions: 2, strength: 11, lifeSteal: 50, hp: 142, physicalResistance: 75, loot: {gold: 290, items: []}, exp: 2900, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(71).png?alt=media&token=7ea84b7f-3825-4c13-8527-d1e8d1d58fb7'}
        ],
        //8
        [{name: 'hydra', actions: 5, strength: 10, lifeSteal: 20, hp: 172, loot: {gold: 390, items: []}, exp: 3900, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(72).png?alt=media&token=ff66a119-8295-4532-afa7-73de03d564ac'},
        {name: 'water elemental', actions: 1, dmgType: 'cold', strength: 50, hp: 208, vulnerabilities: ['lightning'], loot: {gold: 390, items: []}, exp: 3900, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fwater-elemental.png?alt=media&token=0732233c-46dd-4710-b0ff-885adf1debb9'},
        ],
        //9
        [{name: 'treant', actions: 2, strength: 22, hp: 138, physicalResistance: 25, vulnerabilities: ['fire'], loot: {gold: 500, items: []}, exp: 5000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(73).png?alt=media&token=863bed33-f995-4ad1-900f-5fef35f806c9'}
        ],
        //10
        [{name: 'aboleth', actions: 2, strength: 12, hp: 235, loot: {gold: 590, magicResistance: 75, items: []}, exp: 5900, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Faboleth-beholder.png?alt=media&token=c20a9625-a10c-4207-8413-d0b9c8dad72c'},
        {name: 'young red dragon', actions: 3, strength: 20, hp: 278, absorb: 'fire', magicResistance: 25, physicalResistance: 25, dmgType: 'fire', loot: {gold: 590, items: ['red dragon scalemail']}, exp: 5900, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fred-dragon.png?alt=media&token=d92dc5a2-e36e-4271-bb47-0096710c57a9'},
        ],
        //11
        [{name: 'remorhaz', actions: 1, strength: 50, absorb: 'fire', thorns: '10', immunities: ['cold'], dmgType: 'fire', hp: 395, loot: {gold: 720, items: []}, exp: 7200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(74).png?alt=media&token=faabbe05-aa5f-4e78-a351-29656e23f096'},
        {name: 'ice golem', actions: 3, strength: 25, absorb: 'cold', vulnerabilities: ['fire'], thorns: '10', dmgType: 'cold', hp: 481, loot: {gold: 720, items: []}, exp: 7200, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fice-golem.png?alt=media&token=515795bf-c616-468e-85b9-aa73030b1651'},
        ],
        //12
        [{name: 'archmage', actions: 1, strength: 60, hp: 499, physicalResistance: 25, magicResistance: 50, dmgType: 'magic', loot: {gold: 840, items: ['dagger']}, exp: 8400, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(75).png?alt=media&token=2f1e550d-50f4-4c82-9864-110bf7b7c8f2'}
        ],
        //13
        [{name: 'beholder', actions: 3, strength: 30, hp: 1800, loot: {gold: 1000, items: []}, dmgType: 'magic', exp: 10000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fbeholder.png?alt=media&token=15bc1d92-68e6-4f1b-8fad-28504605bfdc'},
        {name: 'mind flayer', actions: 1, strength: 80, hp: 2270, loot: {gold: 1000, items: []}, magicResistance: 50, absorb: 'psychic', lifeSteal: 75, dmgType: 'psychic', exp: 10000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fmind-flayer.png?alt=media&token=ed563277-d397-4f94-8627-58220e02424e'},
        ],
        //14
        [{name: 'purple dragon', actions: 3, absorb: 'psychic', magicResistance: 25, physicalResistance: 25, dmgType: 'psychic', strength: 14, hp: 1570, loot: {gold: 1150, items: ['purple dragon scalemail']}, exp: 11500, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpurple-dragon.png?alt=media&token=86a34b7a-7c1f-4718-aa29-644a62914ded'}
        ],
        //15
        [{name: 'baphomet', actions: 4, strength: 21, hp: 2750, loot: {gold: 1300, items: []}, exp: 13000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fbaphomet.png?alt=media&token=187c94ae-a505-441a-8773-847c8755e127'}
        ],
        //16
        [{name: 'adult blue dragon', actions: 3, strength: 16, hp: 2250, loot: {gold: 1500, items: []}, exp: 15000, dmgType: 'lightning', absorb: 'lightning', magicResistance: 50, physicalResistance: 25, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fblue-dragon.png?alt=media&token=edbedc28-1cce-43dc-9d9e-0ed92fbb24ed'}
        ],
        //17
        [{name: 'adult gold dragon', actions: 3, strength: 28, magicResistance: 50, physicalResistance: 25, hp: 2560, dmgType: 'fire', absorb: 'fire', loot: {gold: 1800, items: []}, exp: 18000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(78).png?alt=media&token=3c267af7-a727-48d9-9a84-ded90c8669a6'}
        ],
        //18
        [{name: 'abyssal ooze', actions: 3, strength: 39, hp: 5740, loot: {gold: 2000, items: []}, exp: 20000,thorns: 39, absorb: 'melee', dmgType: 'acid', img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fabyssal-ooze.png?alt=media&token=76919f5f-6822-439d-bd5c-2437fb3b5e8b'}
        ],
        //19
        [{name: 'balor', actions: 2, strength: 29, absorb: 'fire', dmgType: 'fire', thorns: 10, magicResistance: 30, hp: 26200, loot: {gold: 2200, items: []}, exp: 22000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(77).png?alt=media&token=31b1e9f0-1f1a-4473-8a05-db64d0ddff1b'}
        ],
        //20
        [{name: 'death', actions: 10, strength: 100, hp: 1000000, loot: {gold: 2500, items: []}, vulnerabilities: ['radiant'], absorb: 'necrotic', exp: 25000, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fpngwing.com%20(79).png?alt=media&token=aa71a739-6b17-42d9-83fc-5d470623a567'}
        ]
    ],
    // price ranges c: 100-1000, uc: 1000-4000, r: 4000-10000, vr: 10000-25000
    // TODO consumables: manual of bodily health, Manual of Gainful Exercise
    // TODO add: armor of resistance, armor of vulnerability, brooch of shielding, demon armor, dragon slayer, holy avenger, mace of smiting, ring of resistance
    items: [
      {name: 'shortsword', effect: 'strength', value: 2, type: 'mainHand', price: 400, rarity: 'c', requirements: [{stat: 'baseStrength', req: 2}]},
      {name: 'dagger', effect: 'strength', value: 1, type: 'offHand', price: 200, rarity: 'c'},
      {name: 'spear', effect: 'strength', value: 1, type: 'mainHand', price: 200, rarity: 'c'},
      {name: 'shortbow', effect: ['strength', 'dmgType'], value: [1, 'range'], type: 'mainHand', price: 200, rarity: 'c'},
      {name: 'sticky shield', effect: 'baseHp', value: 3, type: 'offHand', price: 600, rarity: 'c'},
      {name: 'battleaxe', effect: 'strength', value: 3, type: 'mainHand', price: 600, rarity: 'c'},
      {name: 'greataxe', effect: 'strength', type: 'mainHand', value: 6, requirements: [{stat: 'baseStrength', req: 4}], price: 1200, rarity: 'uc'},
      {name: 'scimitar', effect: 'strength', value: 2, type: 'mainHand', price: 400, rarity: 'c'},
      {name: 'adamantine armor', effect: 'immunities', value: 'crit', type: 'armor', price: 4000, rarity: 'uc'},
      {name: 'handaxe', effect: 'strength', value: 1, type: 'mainHand', price: 200, rarity: 'c'},
      {name: 'greatclub', effect: 'strength', value: 2, type: 'mainHand', price: 400, rarity: 'c'},
      {name: 'morningstar', effect: 'strength', value: 2, type: 'mainHand', price: 400, rarity: 'c'},
      {name: 'javelin', effect: 'strength', value: 1, type: 'mainHand', price: 200, rarity: 'c'},
      {name: 'fire snake hide', effect: 'magicResistance', value: 20, type: 'armor', price: 1400, rarity: 'uc'},
      {name: 'displacer cloak', effect: 'dodge', value: 25, type: 'cloak', price: 5000, rarity: 'r'},
      {name: 'purple dragon scalemail', effect: ['baseHp', 'resistances'], value: [50, 'psychic'], type: 'armor', price: 10000, rarity: 'vr'},
      {name: 'red dragon scalemail', effect: ['baseHp', 'resistances'], value: [50, 'fire'], type: 'armor', price: 10000, rarity: 'vr'},
      {name: 'amulent of health', effect: 'baseHp', value: 19, type: 'accessory', price: 5000, rarity: 'r'},
      {name: 'aminated shield', effect: 'physicalResistance', value: 20, type: '', price: 10000, rarity: 'vr'},
      {name: 'armor of invulnerability', effect: 'physicalResistance', value: 100, type: 'armor', price: 100000, rarity: 'l', requirements: [{stat: 'baseStrength', req: 15}]},
      {name: 'armor +1', effect: 'physicalResistance', value: 25, type: 'armor', price: 5000, rarity: 'r'},
      {name: 'longsword +1', effect: 'strength', value: 10, type: 'mainHand', price: 5000, rarity: 'r'},
      {name: 'armor +2', effect: 'physicalResistance', value: 50, type: 'armor', price: 10000, rarity: 'vr'},
      {name: 'belt of hill giant strength', effect: 'strength', value: 5, type: 'accessory', price: 5000, rarity: 'r'},
      {name: 'belt of storm giant strength', effect: 'strength', value: 9, type: 'accessory', price: 5000, rarity: 'vr'},
      {name: 'belt of dwarvenkind', effect: ['baseHp', 'resistances'], value: [2, 'poison'], type: 'accessory', price: 5000, rarity: 'vr'},
      {name: 'boots of elvenkind', effect: 'dodge', value: 10, type: 'accessory', price: 1500, rarity: 'uc'},
      {name: 'boots of speed', effect: 'baseActions', value: 1, type: 'accessory', price: 7500, rarity: 'r'},
      {name: 'boots of the winterlands', effect: 'resistances', value: 'cold', type: 'accessory', price: 2000, rarity: 'uc'},
      {name: 'bracers of archery', effect: 'strength', value: 2, type: 'accessory', price: 2000, rarity: 'uc', requirements: [{stat: 'equipment', req: 'bow'}]},
      {name: 'bracers of defense', effect: 'strength', value: 2, type: 'accessory', price: 2000, rarity: 'uc', requirements: [{stat: 'armor', req: null}]},
      {name: 'cloak of protection', effect: 'physicalResistance', value: 20, type: 'cloak', price: 2500, rarity: 'uc'},
      {name: 'dagger of venom', effect: ['strength', 'dmgType'], value: [10, 'poison'], type: 'offHand', price: 10000, rarity: 'r'},
      {name: 'dancing sword', effect: ['baseActions', 'strength'], value: [1, 5], type: '', price: 10000, rarity: 'vr'},
      {name: 'defender', effect: ['strength', 'physicalResistance'], value: [10, 50], type: 'mainHand', price: 100000, rarity: 'l'},
      {name: 'dwarven plate', effect: ['baseHp', 'physicalResistance'], value: [50, 50], type: 'armor', price: 25000, rarity: 'vr', requirements: [{stat: 'race', req: 'dwarf'}]},
      {name: 'dwarven hammer', effect: 'strength', value: 15, type: 'mainHand', price: 15000, rarity: 'vr', requirements: [{stat: 'race', req: 'dwarf'}]},
      {name: 'flame tongue', effect: ['strength', 'dmgType'], value: [10, 'fire'], type: 'mainHand', price: 10000, rarity: 'r'},
      {name: 'frost brand', effect: ['strength', 'dmgType', 'resistances'], value: [10, 'cold', 'fire'], type: 'mainHand', price: 25000, rarity: 'vr'},
      {name: 'gauntlets of ogre power', effect: 'strength', value: 3, type: 'accessory', price: 2000, rarity: 'uc'},
      {name: 'javelin of lightning', effect: ['strength', 'dmgType'], value: [3, 'lightning'], type: 'mainHand', price: 4000, rarity: 'uc'},
      {name: 'luck blade', effect: ['strength', 'luck'], value: [5, 10], type: 'mainHand', price: 100000, rarity: 'l'},
      {name: 'mace of disruption', effect: ['strength', 'dmgType'], value: [6, 'radiant'], type: 'mainHand', price: 10000, rarity: 'r'},
      {name: 'mantle of spell resistance', effect: 'magicResistance', value: 50, type: 'cloak', price: 10000, rarity: 'r'},
      {name: 'periapt of proof against poison', effect: 'immunities', value: 'poison', type: 'accessory', price: 10000, rarity: 'r'},
      {name: 'ring of evasion', effect: 'dodge', value: 20, type: 'accessory', price: 4000, rarity: 'r'},
      {name: 'ring of protection', effect: ['physicalResistance', 'magicResistance'], value: [20, 20], type: 'accessory', price: 8000, rarity: 'r'},
      {name: 'ring of regeneration', effect: 'regen', value: 5, type: 'accessory', price: 20000, rarity: 'vr'},
      {name: 'ring of spell turning', effect: ['thorns', 'magicResistance'], value: [100, 100], type: 'accessory', price: 100000, rarity: 'l'},
      {name: 'ring of warmth', effect: 'resistances', value: 'cold', type: 'accessory', price: 1500, rarity: 'uc'},
      {name: 'robe of the archmagi', effect: ['magicResistance', 'magic', 'physicalResistance'], value: [50, 10, 25], type: 'cloak', price: 100000, rarity: 'l'},
      {name: 'rod of absorption', effect: 'absorb', value: 'randomDmgType', type: 'mainHand', price: 25000, rarity: 'vr'},
      {name: 'scimitar of speed', effect: ['actions', 'strength'], value: [1, 15], type: 'mainHand', price: 25000, rarity: 'vr'},
      {name: 'shield', effect: 'physicalResistance', value: 10, type: 'offHand', price: 500, rarity: 'c'},
      {name: 'shield +1', effect: 'physicalResistance', value: 20, type: 'offHand', price: 5000, rarity: 'uc'},
      {name: 'shield +2', effect: 'physicalResistance', value: 40, type: 'offHand', price: 10000, rarity: 'r'},
      {name: 'shield +3', effect: 'physicalResistance', value: 75, type: 'offHand', price: 50000, rarity: 'vr'},
      {name: 'spellguard shield', effect: ['physicalResistance', 'magicResistance'], value: [10, 50], type: 'offHand', price: 50000, rarity: 'vr'},
      {name: 'staff of fire', effect: ['magic', 'dmgType', 'resistances'], value: [10, 'fire', 'fire'], type: 'mainHand', price: 25000, rarity: 'vr', requirements: [{stat: 'classType', req: ['wizard', 'warlock']}]},
      {name: 'staff of frost', effect: ['magic', 'dmgType', 'resistances'], value: [10, 'cold', 'cold'], type: 'mainHand', price: 25000, rarity: 'vr', requirements: [{stat: 'classType', req: ['wizard', 'warlock']}]},
      {name: 'staff of force', effect: ['magic', 'dmgType', 'resistances'], value: [10, 'melee', 'melee'], type: 'mainHand', price: 25000, rarity: 'vr', requirements: [{stat: 'classType', req: ['wizard', 'warlock']}]},
      {name: 'staff of lightning', effect: ['magic', 'dmgType', 'resistances'], value: [10, 'lightning', 'lightning'], type: 'mainHand', price: 25000, rarity: 'vr', requirements: [{stat: 'classType', req: ['wizard', 'warlock']}]},
      {name: 'staff of withering', effect: ['magic', 'dmgType', 'resistances'], value: [10, 'necrotic', 'necrotic'], type: 'mainHand', price: 25000, rarity: 'vr', requirements: [{stat: 'classType', req: ['cleric', 'warlock']}]},
      {name: 'staff of the magi', effect: ['magic', 'absorb'], value: [10, 'magic'], type: 'mainHand', price: 100000, rarity: 'l', requirements: [{stat: 'classType', req: ['wizard', 'warlock']}]},
      {name: 'luckstone', effect: 'luck', value: 2, type: 'accessory', price: 2000, rarity: 'uc'},
      {name: 'sun blade', effect: ['strength', 'dmgType'], value: [5, 'radiant'], type: 'mainHand', price: 10000, rarity: 'r'},
      {name: 'sword of life stealing', effect: ['strength', 'dmgType', 'lifeSteal'], value: [5, 'necrotic', 25], type: 'mainHand', price: 10000, rarity: 'r'},
      {name: 'sword of sharpness', effect: 'strength', value: 15, type: 'mainHand', price: 25000, rarity: 'vr'},
      {name: 'sword of sharpness', effect: 'strength', value: 25, type: 'mainHand', price: 100000, rarity: 'l'},
      {name: 'wand of the war mage', effect: 'magic', value: 15, type: 'mainHand', price: 25000, rarity: 'vr', requirements: [{stat: 'classType', req: ['warlock', 'cleric', 'wizard']}]},
    ],
    abilities: [
      {name: 'rage', level: 1, strength: 1, effect: 'physicalResistance', value: 50, buff: true, classType: 'barbarian', uses: 1, baseUses: 1},
    ],
    spells: [
      //1
      [
        {name: 'acid splash', strength: 3, dmgType: 'acid', level: 1},
        {name: 'poison spray', strength: 6, dmgType: 'poison', level: 1},
        {name: 'chill touch', strength: 4, dmgType: 'necrotic', level: 1},
        {name: 'edritch blast', strength: 5, dmgType: 'melee', level: 1},
        {name: 'fire bolt', strength: 5, dmgType: 'fire', level: 1},
        {name: 'ray of frost', strength: 4, dmgType: 'cold', level: 1},
        {name: 'sacred flame', strength: 4, dmgType: 'radiant', level: 1},
        {name: 'shocking grasp', strength: 4, dmgType: 'lightning', level: 1},
        {name: 'vicious mockery', strength: 4, dmgType: 'psychic', level: 1},
        {name: 'light heal', effect: 'hp', value: 1, buff: true, level: 1},
      ],
      //2
      [
        {name: 'burning hands', strength: 9, dmgType: 'fire', level: 2},
        {name: 'hellish rebuke', strength: 10, dmgType: 'fire', reqs: {classType: 'warlock'}, level: 2},
        {name: 'inflict wounds', strength: 15, dmgType: 'necrotic', reqs: {classType: 'warlock'}, level: 2},
        {name: 'guided bolt', strength: 12, dmgType: 'radiant', level: 2},
        {name: 'magic missile', areaEffect: true, strength: 4, dmgType: 'melee', level: 2},
        {name: 'cure wounds', effect: 'hp', value: 5, buff: true, level: 2, reqs: {classType: 'cleric'}},
        {name: 'weaken', effect: 'strength', value: -3, buff: true, temp: true, level: 2},
        {name: 'power up', effect: 'strength', value: 3, buff: true, temp: true, level: 2},
      ],
      //3
      [
        {name: 'cure wounds', effect: 'hp', value: 10, buff: true, level: 3, reqs: {classType: 'cleric'}},
        {name: 'acid arrow', strength: 16, dmgType: 'acid', level: 3},
        {name: 'scorching ray', areaEffect: true, strength: 6, dmgType: 'fire', level: 3},
        {name: 'shatter', areaEffect: true, strength: 8, dmgType: 'melee', level: 3},
        {name: 'branding smite', strength: 12, dmgType: 'radiant', level: 3},
        {name: 'moonbeam', areaEffect: true, strength: 6, dmgType: 'radiant', level: 3},
        {name: 'prayer of healing', areaEffect: true, effect: 'hp', value: 4, buff: true, level: 3, reqs: {classType: 'cleric'}},
      ],
      //4
      [
        {name: 'cloud of daggers', areaEffect: true, strength: 12, dmgType: 'melee', level: 4},
        {name: 'call lightning', strength: 22, dmgType: 'lightning', level: 4},
        {name: 'fireball', strength: 24, dmgType: 'fire', level: 4},
        {name: 'lightning bolt', strength: 24, dmgType: 'lightning', level: 4},
        {name: 'haste', effect: 'actions', value: 1, buff: true, level: 4},
        {name: 'slow', effect: 'actions', value: 1, level: 4},
        {name: 'mass healing word', effect: 'hp', value: 8, buff: true, level: 4, reqs: {classType: 'cleric'}},
      ],
      //5
      [
        {name: 'blight', strength: 32, dmgType: 'necrotic', level: 5},
        {name: 'ice storm', strength: 16, areaEffect: true, dmgType: 'cold', level: 5},
        {name: 'phantasmal killer', strength: 40, dmgType: 'psychic', level: 5},
      ],
      //6
      [
        {name: 'cloud kill', areaEffect: true, strength: 20, dmgType: 'poison', level: 6},
        {name: 'cone of cold', strength: 48, dmgType: 'cold', level: 6},
        {name: 'flame strike', strength: 48, dmgType: 'fire', level: 6},
        {name: 'insect plague', areaEffect: true, strength: 20, dmgType: 'melee', level: 6},
        {name: 'greater restoration', effect: 'hp', value: 55, buff: true, level: 6, reqs: {classType: 'cleric'}},
        {name: 'mass cure wounds', areaEffect: true, effect: 'hp', value: 17, buff: true, level: 6, reqs: {classType: 'cleric'}},
      ],
      //7
      [
        {name: 'chain lightning', areaEffect: true, strength: 25, dmgType: 'lightning', level: 7},
        {name: 'circle of death', areaEffect: true, strength: 24, dmgType: 'necrotic', level: 7},
        {name: 'disintegrate', strength: 70, dmgType: 'melee', level: 7},
        {name: 'sunbeam', strength: 65, dmgType: 'radiant', level: 7},
        {name: 'freezing sphere', areaEffect: true, strength: 60, dmgType: 'cold', level: 7},
        {name: 'harm', strength: 60, dmgType: 'necrotic', level: 7},
        {name: 'heal', effect: 'hp', value: 70, buff: true, level: 7, reqs: {classType: 'cleric'}},
      ],
      //8
      [
        {name: 'finger of death', strength: 86, dmgType: 'necrotic', level: 8},
        {name: 'fire storm', areaEffect: true, strength: 35, dmgType: 'necrotic', level: 8},
        {name: 'teleport', areaEffect: true, effect: 'inBattle', value: false, title: 'Party flee battle', level: 8},
        {name: 'prasmatic spray', areaEffect: true, strength: 35, dmgType: getRandomDmgType(), level: 8},
      ],
      //9
      [
        {name: 'earthquake', areaEffect: true, strength: 50, dmgType: 'melee', level: 9},
        {name: 'incendiary cloud', areaEffect: true, strength: 50, dmgType: 'fire', level: 9},
        {name: 'sunburst', areaEffect: true, strength: 56, dmgType: 'radiant', level: 9},
      ],
      //10
      [
        {name: 'mass heal', areaEffect: true, effect: 'hp', value: 116, buff: true, level: 10, reqs: {classType: 'cleric'}},
        {name: 'mass haste', areaEffect: true, effect: 'actions', value: 1, buff: true, level: 10},
        {name: 'meteor storm', areaEffect: true, strength: 120, dmgType: 'fire', level: 10},
        {name: 'power word kill', strength: 100, dmgType: 'fire', level: 10},
        {name: 'weird', areaEffect: true, strength: 75, dmgType: 'psychic', level: 10},
      ],
    ],
    quests: [{objective: 'kill', target: 'monsters', goal: 10, reward: 500}, {objective: 'kill', target: 'monsters', goal: 25, reward: 5000}, {objective: 'kill', target: 'monsters', goal: 1, reward: 50}, {objective: 'find', target: 'item', goal: 'c', reward: 'uc'}, {objective: 'find', target: 'item', goal: 'uc', reward: 'r'}, {objective: 'find', target: 'item', goal: 'r', reward: 'vr'}],
    combatMonsters: [],
    player: {
      characters: [],
      gold: 5000,
      items: [],
      kills: {},
      quest: {}
    },
    location: 0,
    selected: '',
    characterImgList: [],
    // max exp til next lvl
    levelUpChart: [300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000],
    message: ''
  },
  getters: {

  },
  mutations: {
    selectCharacter(state, char){
      state.selected = char
    },
    bringOutYourDead(state){
      state.combatMonsters = []
    },
    destroyCharacter(state, characterId){
      state.player.characters = state.player.characters.filter(c => c.id != characterId)
    },
    reducePlayerGold(state, cost){
      state.player.gold -= cost
    },
    equipItem(state, data){
      let char = state.player.characters.find(c => c.id == data.characterId)
      if(Array.isArray(data.item.effect)){
        for(let i = 0; i < data.item.effect.length; i++){
          if(Array.isArray(char[data.item.effect[i]])){
            char[data.item.effect[i]].push(data.item.value[i])
          }else if(typeof char[data.item.effect[i]] === 'string'){
            char[data.item.effect[i]] = data.item.value[i]
          }
          else{
            char[data.item.effect[i]] += data.item.value[i]
          }
        }
      }else{
        if(Array.isArray(char[data.item.effect])){
          char[data.item.effect].push(data.item.value)
        }else if(typeof char[data.item.effect] === 'string'){
          char[data.item.effect] = data.item.value
        }else{
          char[data.item.effect] += data.item.value
        }
      }
      char[data.item.type] = data.item.id
    },
    unequipItem(state, data){
      let char = state.player.characters.find(c => c.id == data.characterId)
      if(Array.isArray(data.item.effect)){
        for(let i = 0; i < data.item.effect.length; i++){
          if(Array.isArray(char[data.item.effect[i]])){
            let index = char[data.item.effect[i]].indexOf(data.item.value[i])
            char[data.item.effect[i]].splice(index, 1)
          }else if(typeof char[data.item.effect[i]] === 'string'){
            char[data.item.effect[i]] = data.item.effect[i] == 'dmgType' ? 'melee' : null
          }else{
            char[data.item.effect[i]] -= data.item.value[i]
          }
        }
      }else{
        if(Array.isArray(char[data.item.effect])){
          let index = char[data.item.effect].indexOf(data.item.value)
          char[data.item.effect].splice(index, 1)
        }else if(typeof char[data.item.effect] === 'string'){
          char[data.item.effect] = data.item.effect == 'dmgType' ? 'melee' : null
        }else{
          char[data.item.effect] -= data.item.value
        }
      }
      char[data.item.type] = null
    },
    addStatsToMonster(state, data){
      let item = state.items.filter(i => i.name == data.item)
      item = item[0]
      let monster = state.combatMonsters.filter(cm => cm.id == data.monsterId)
      monster = monster[0]
      if(Array.isArray(item.effect)){
        for(let i = 0; i < item.effect.length; i++){
          if(Array.isArray(monster[item.effect[i]])){
            monster[item.effect[i]].push(item.value[i])
          }else{
            monster[item.effect[i]] += item.value[i]
          }
        }
      }else{
        if(Array.isArray(monster[item.effect])){
          monster[item.effect].push(item.value)
        }else{
          monster[item.effect] += item.value
        }
      }
    }
  },
  actions: {

  },
  modules: {
  }
})

export default store

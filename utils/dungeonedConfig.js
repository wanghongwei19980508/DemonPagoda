export const drawer = [{
  name: '建筑',
  config: [{
    id: '0',
    name: '墙'
  },
  {
    id: '3',
    name: '楼梯(上楼)'
  },
  {
    id: '4',
    name: '楼梯(下楼)'
  },
  {
    id: '101',
    name: '地板'
  },
  {
    id: '102',
    name: '密道'
  },
  {
    id: '201',
    name: '铜门'
  },
  {
    id: '202',
    name: '银门'
  },
  {
    id: '203',
    name: '金门'
  },
  ]
},
{
  name: '人物',
  config: [{
    id: '1',
    name: '主角'
  },
  {
    id: '2',
    name: '公主'
  },
  ]
},
{
  name: '道具',
  config: [{
    id: '301',
    name: '铜钥匙'
  },
  {
    id: '302',
    name: '银钥匙'
  },
  {
    id: '303',
    name: '金钥匙'
  },
  ]
},
{
  name: '增益道具',
  config: [
    { id: '801', name: '小剑', attribute: { hp: 0, attack: 1, defense: 0, } },
    { id: '802', name: '小盾', attribute: { hp: 0, attack: 0, defense: 1, } },
    { id: '803', name: '小血', attribute: { hp: 10, attack: 0, defense: 0, } },
    { id: '804', name: '中剑', attribute: { hp: 0, attack: 3, defense: 0, } },
    { id: '805', name: '中盾', attribute: { hp: 0, attack: 0, defense: 3, } },
    { id: '806', name: '中血', attribute: { hp: 30, attack: 0, defense: 0, } },
  ]
},
{
  name: '怪物',
  config: [{
    id: '901',
    name: '史莱妐',
    attribute: {
      hp: 80,
      attack: 15,
      defense: 10,
      goldCoin: 10,
    }
  },
  {
    id: '902',
    name: '蝙蝠',
    attribute: {
      hp: 100,
      attack: 15,
      defense: 15,
      goldCoin: 20,
    }
  },
  {
    id: '903',
    name: '骷髅士兵',
    attribute: {
      hp: 120,
      attack: 40,
      defense: 8,
      goldCoin: 40,
    }
  },
  {
    id: '904',
    name: '骷髅守卫',
    attribute: {
      hp: 250,
      attack: 8,
      defense: 30,
      goldCoin: 60,
    }
  },
  {
    id: '905',
    name: '史莱姆',
    attribute: {
      hp: 120,
      attack: 12,
      defense: 8,
      goldCoin: 20,
    }
  },
  {
    id: '906',
    name: '法师',
    attribute: {
      hp: 80,
      attack: 100,
      defense: 20,
      goldCoin: 60,
    }
  },
  {
    id: '907',
    name: '野人',
    attribute: {
      hp: 230,
      attack: 80,
      defense: 40,
      goldCoin: 80,
    }
  },
  {
    id: '908',
    name: '皇家守卫',
    attribute: {
      hp: 500,
      attack: 100,
      defense: 100,
      goldCoin: 100,
    }
  },
  {
    id: '909',
    name: 'BOSS',
    attribute: {
      hp: 1000,
      attack: 200,
      defense: 200,
      goldCoin: 200,
    }
  },]
},
]
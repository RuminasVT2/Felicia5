/*let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 20) ? 'Beginner'
          : ((user.level >= 20) && (user.level <= 40)) ? 'Commander Elite'
          : ((user.level >= 40) && (user.level <= 60)) ? 'The Commander Hero'
          : ((user.level >= 60) && (user.level <= 80)) ? 'The Commander Elite Hero'
          : ((user.level >= 80) && (user.level <= 100)) ? 'The Commander Elite Super Strong Hero'
          : ((user.level >= 100) && (user.level <= 120)) ? 'The Commander Elite Super Strong Shadow Hero'
          : ((user.level >= 120) && (user.level <= 140)) ? 'The Commander Legends Shadow Hero'
          : ((user.level >= 140) && (user.level <= 160)) ? 'The Commander Super Legends Shadow Hero'
          : 'Legends'
  user.role = role
  return true
}

module.exports = handler*/

const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Tier 11-C': 0, 
  'Tier 11-B': 30,
  'Tier 11-A': 60,
  'Tier 10-C': 90,
  'Tier 10-B': 120,
  'Tier 10-A': 150,
  'Tier 9-C': 180,
  'Tier 9-B': 210,
  'Tier 9-A': 240,
  'Tier 8-C': 270,
  'Tier 8-B': 300,
  'Tier 8-A': 330,
  'Tier 7-C': 360, 
  'Tier 7-B': 390,
  'Tier 7-A': 420,
  'Tier 6-C': 450,
  'Tier 6-B': 480,
  'Tier 6-A': 510,
  'Tier 5-C': 540,
  'Tier 5-B': 570,
  'Tier 5-A': 600,
  'Tier 4-C': 630,
  'Tier 4-B': 660,
  'Tier 4-A': 690,
  'Tier 3-C': 720, 
  'Tier 3-B': 750,
  'Tier 3-A': 780,
  'Tier 2-C': 810,
  'Tier 2-B': 840,
  'Tier 2-A': 870,
  'Tier 1-C': 920,
  'Tier 1-B': 960,
  'Tier 1-A': 1000,
  'Tier 0': 10000
}

module.exports = {
  before (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}

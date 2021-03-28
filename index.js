/** @format */

module.exports = function Rez(mod) {
  let enabled = true
  mod.command.add("rez", () => {
    enabled = !enabled
    mod.command.message(`Instant Rez ${enabled ? "enabled" : "disabled"}`)
  })
  mod.hook("S_USER_DEATH", 1, (e) => {
    if (e.killed === true && e.name === mod.game.me.name) {
      if (enabled) {
        mod.send("C_REVIVE_NOW", 2, {
          type: 1,
          id: 4294967295,
        })
        mod.send("C_REVIVE_NOW", 2, {
          type: 6,
          id: 4294967295,
        })
      }
    }
  })
}

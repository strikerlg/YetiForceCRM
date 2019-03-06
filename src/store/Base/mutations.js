/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */
import mutations from '../../store/mutations.js'
import Objects from '../../utilities/Objects.js'

export default {
  /**
   * Update configuration from server
   *
   * @param {object} state
   * @param {object} env
   */
  [mutations.Base.updateEnv](state, env) {
    Objects.mergeDeepReactive(state.env, env)
  },

  /**
   * Update menu positions
   *
   * @param {object} state
   * @param {array} positions
   */
  [mutations.Base.updateMenuPositions](state, positions) {
    state.menu.positions = positions
  },

  /**
   * Add url to base state
   *
   * @param {object} state
   * @param {object} payload
   */
  [mutations.Base.addUrl](state, { path, url }) {
    Objects.setReactive(state.url, path, url)
  },

  /**
   * Set authorization data
   *
   * @param   {object}  state
   * @param   {object}  data
   */
  [mutations.Base.isLoggedIn](state, data) {
    state.isLoggedIn = data.isLoggedIn
  }
}
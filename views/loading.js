/* globals app */

const yo = require('yo-yo')
const renderProfileCard = require('../com/profile-card')
const renderFooter = require('../com/footer')
const renderSpinnerIcon = require('../com/icons/spinner')

// exported api
// =

module.exports = function () {
  return yo`
    <div class="view feed">
      <div class="sidebar-col">
        ${renderProfileCard(app.viewedProfile || app.currentUserProfile)}
        ${renderFooter()}
      </div>

      <div class="main-col">
        <div class="loading-view">
          ${renderSpinnerIcon()} Loading...
        </div>
      </div>
    </div>
  `
}

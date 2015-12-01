import { combineReducers } from 'redux'
import {
  ADD_FORUM, ADD_MESSAGE,
} from '../actions'

const forumInitialState = {
  '1' : {
   'title': 'Which is the better OS?',
   'alpha_opt' : 'Android',
   'beta_opt': 'iOS',
   'alpha_votes': 1008,
   'beta_votes': 666
 }
}

const messagesInitialState = {
'1' : {
  '1': {
      'text': 'I think Android has more characters compared to iOS',
      'user_display_name': 'Anurag Uniyal',
      'vote': 'alpha'
   },
  '2': {
      'text': 'Android alpabetically comes first compares to iOS',
      'user_display_name': 'Ritesh Tiwari',
      'vote': 'beta'
   }
}
}

function forums(state=forumInitialState, action){
  switch (action.type) {
    case ADD_FORUM:
      return state
    default:
      return state
  }
}

function messages(state=messagesInitialState, action){
  switch (action.type) {
    case ADD_MESSAGE:
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  forums,
  messages
})

export default rootReducer

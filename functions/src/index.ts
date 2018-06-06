import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google'
import Repository from './repository/repository';

const app = dialogflow()

const repo = new Repository<IAuthor>("author");

app.intent('Default Welcome Intent', conv => {
    conv.ask('Hi, how is it going?')
})

app.intent('Default Fallback Intent', conv => {
    conv.ask(`I didn't understand. Can you tell me something else?`)
})

exports.fulfillment = functions.https.onRequest(app);
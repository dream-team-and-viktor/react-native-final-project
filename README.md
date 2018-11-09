# react-native-final-project
# General
Backend: Node.js v 8.10 </br>
Backend location: AWS Lambda
Frontend (Intent Shema): JSON
Invocation: health voice


# Handlers
## Adding new handlers:
To add new handler, import it to the “index.js” file. Note: handlers name and file name should be the same.
You need to change GAME_STATES mode, to start a handler. GAME_STATES modes are located in “~/data/constants.js”.
Amazon Alexa requires default Intent Handlers to work proper. This is the list of required Intents: 
- AMAZON.StartOverIntent
- AMAZON.RepeatIntent
- AMAZON.HelpIntent
- AMAZON.StopIntent
- AMAZON.CancelIntent
-Unhandled

You also need to request “alexa-sdk”.

## Current handlers:
- assessStateHandlers
    - Description: Starts trivia questions
    - Intent: AnswerIntent
    - Sample Utterances: 
        - the answer is {Answer}
        - my answer is {Answer}
        - is it {Answer}
        - {Answer} is my answer
    - Slot Type: AMAZONE.SearchQuery

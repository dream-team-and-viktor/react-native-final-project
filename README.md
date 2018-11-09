# General
Backend: Node.js v 8.10 </br>
Backend location: AWS Lambda </br>
Frontend (Intent Shema): JSON </br>
Invocation: health voice </br>

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

- concussionTopicHandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:

- helpStateHandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:
- memoryStartStatehandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:
- memoryStatehandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:
- nameHandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:
- startStateHandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:
- topicHandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:
- triviaStateHandlers
    - Description:
    - Intent:
    - Sample Utterances:
    - Slot Type:

# Functions

## Current functions:

- *handleUserGuess*: 
Used in *triviaStateHandler* to checks if user answer is valid: answer is not Null, answer is an integer, that is bigger or equal to 0 and smaller or equal to six. Then it checks if trivia questions are keep going. If score for first six questions is 6, Alexa will tell user to immediately go to the doctor. If it a last question, GAME_STATE mode will be changed.
- *handleUserPhrase*
Used in *memoryStatehandlers* to check if user gave out words in the same sequence, as Alexa told to a user. The test will be repeated two times.
- *sendSMS*
Used in *helpStateHandlers* to send SMS to a user’s phone with the score. It uses AWS SNS.

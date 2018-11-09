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
    - Description: Change the GAME_MODE to START, which enables the startStateHandler
    - Intent: AssessIntent
    - Sample Utterances: is started by *concussionTopicHandlers*
    - Slot Type: None

- concussionTopicHandlers
    - Description: Checks user input and starts either memory test, or concussion questions (need to be developed), or SCAT5 questions
    - Intent: ConcussionTopicSelectionIntent
    - Sample Utterances:
        - Uh {UserConcussionTopic}
        - {UserConcussionTopic} please
        - {UserConcussionTopic}
    - Slot Type: ConcussionTopic
        - Requires:
            - Test
            - Assessment
            - Question

- helpStateHandlers
    - Description: Is started when a user needs helps. The *DOCTOR* intent is called by *handleUserGuess* when the score for 6 questions is 6
    - Intent:
        - helpTheUser
        - DOCTOR
    - Sample Utterances: *helpTheUser* is called from any point during the session. *DOCTOR* is called by *handleUserGuess*
    - Slot Type: None

- memoryStartStatehandlers
    - Description: Starts memory test assessment
    - Intent: beginAssessment
    - Sample Utterances: is started by *concussionTopicHandlers*
    - Slot Type: None

- memoryStatehandlers
    - Description: Handles user's input and either provides with another test or ends testing
    - Intent:
        - MemPhrase
        - anotherTest
        - endTest
        - Unhandled
    - Sample Utterances: The phrase is {Phrase}
    - Slot Type: AMAZON.SearchQuery

- nameHandlers
    - Description: Ask user for his/her name, and greets the user
    - Intent: UserNameIntent
    - Sample Utterances:
        - I am {Username}
        - My name is {Username}
        - {Username}
    - Slot Type: AMAZON.US_FIRST_NAME

- startStateHandlers
    - Description: Starts trivia questions 
    - Intent: StartAssessment
    - Sample Utterances: is started by *assessStateHandlers*
    - Slot Type: None

- topicHandlers
    - Description: Ask user to choose a topic (currently concussion)
    - Intent: TopicIntent
    - Sample Utterances:
        - I want {UserTopic}
        - {UserTopic} please
        - I want to do {UserTopic}
        - {UserTopic}
    - Slot Type:
        - SkillModule
            - concussion

- triviaStateHandlers
    - Description: 
    - Intent:
        - AnswerIntent
        - DontKnowIntent
    - Sample Utterances:
        - AnserIntent:
            - the answer is {Answer}
            - my answer is {Answer}
            - is it {Answer}
            - {Answer} is my answer
        - DontKnowIntent:
            - i don't know
            - don't know
            - i don't know that one
            - dunno
            - skip
    - Slot Type: None

# Functions

## Current functions:

- *handleUserGuess*: </br>
Used in *triviaStateHandler* to checks if user answer is valid: answer is not Null, answer is an integer, that is bigger or equal to 0 and smaller or equal to six. Then it checks if trivia questions are keep going. If score for first six questions is 6, Alexa will tell user to immediately go to the doctor. If it a last question, GAME_STATE mode will be changed.
- *handleUserPhrase* </br>
Used in *memoryStatehandlers* to check if user gave out words in the same sequence, as Alexa told to a user. The test will be repeated two times.
- *sendSMS* </br>
Used in *helpStateHandlers* to send SMS to a user’s phone with the score. It uses AWS SNS.

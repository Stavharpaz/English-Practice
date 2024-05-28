## Common European Framework of Reference (CEFR)

The Common European Framework of Reference (CEFR) is widely used to describe the achievements of foreign language learners across Europe and increasingly in other countries. The CEFR describes language proficiency in reading, writing, listening, and speaking on a six-level scale:

- **A1 (Beginner)**
- **A2 (Elementary)**
- **B1 (Intermediate)**
- **B2 (Upper Intermediate)**
- **C1 (Advanced)**
- **C2 (Proficient)**

Each level is defined by a set of descriptors explaining what the learner should be able to do in reading, listening, speaking, and writing. For example, a B2 speaker can discuss and understand complex topics, while a C1 speaker can perform complex tasks related to work and study.

### Data Analysis and Feature Engineering

These data contain English sentences and their classification according to the appropriate CEFR level. We used feature engineering based on Natural Language Processing (NLP).

**Features:**
1. **Gunning Fog Index:** This index combines the complexity of the words used in the text, especially the percentage of complex words (words with three syllables or more).
2. **Syntactic Complexity Percentage:** This metric measures the complexity of the sentence structure in the text. It can be evaluated in various ways and helps understand the structural complexity of the text. More complex structures typically indicate a higher reading level and linguistic proficiency.
3. **Errors:** A measure of text quality and fluency. Fewer errors generally correspond to higher quality and easier readability.
4. **Variety of Punctuation Marks:** Indicates the complexity and style of writing. A varied use of punctuation often corresponds to more advanced writing styles and can affect the clarity and flow of the text.
5. **Advanced Lexical Features According to Word Level Dictionary:** Refers to the use of advanced vocabulary that is less common or more sophisticated. The presence of words from higher levels of the CEFR can be measured.


### Machine Learning


**Algorithm Selection**

**Gradient Boosting** has proven effective in categorizing texts by CEFR levels due to its ability to iteratively refine its predictions. The model works by creating a series of decision trees, where each tree aims to correct the errors of the preceding trees, thus improving overall accuracy. This iterative refinement process makes Gradient Boosting particularly suitable for assessing text readability as it captures subtle features of linguistic complexity, such as lexical density and syntactic variation. As a result, the model's ability to improve its performance over multiple iterations ensures accurate classification of texts into their appropriate CEFR levels. This advantage significantly contributes to language education and automated text assessment.

![image](https://github.com/Stavharpaz/English-Practice/assets/128739002/8e45fa9d-cb16-422d-9fa8-74c48ced0100)


![image](https://github.com/Stavharpaz/English-Practice/assets/128739002/4f0ceef8-065f-48bf-bc7c-4a5bcf23a34a)


![image](https://github.com/Stavharpaz/English-Practice/assets/128739002/41586cfb-f8b3-48a9-98cd-0f9988f83b5e)


![image](https://github.com/Stavharpaz/English-Practice/assets/128739002/f9af1e8f-2f2b-44a6-b8ed-6b08e76031c2)



**CEFR Level Classifications**

When using CEFR levels:
- Users at level **A1** are classified as **Beginner**.
- Users at level **A2** are classified as **Beginner+**.
- Users at level **B1** are classified as **Intermediate**.
- Users at level **B2** are classified as **Intermediate+**.
- Users at level **C1** are classified as **Expert**.
- Users at level **C2** are classified as **Expert+**.



### Project Screens

**Registration Screen**
- A registration screen that allows users to access all options for a full experience on the site.

**Login Screen**
- A login screen divided into three main components:
  1. For registered users.
  2. For users who haven't registered yet and want a preview of the content.
  3. For new users who want to sign up for the site.

**Home Page**
- The main page of the site where users can view explanations about the scoring system and English levels. Additionally, users can choose an area of interest and start a conversation with the chatbot. Users can also translate unfamiliar words and listen to their pronunciation.

### MySQL Tables

**User Table**
- The user table consists of five columns. The initial level of each user is set to beginner. Additionally, the `id` created when the user is registered serves as a code for the assistant to engage in a conversation with the chatbot.

**Words Table**
- The words table is divided into three columns where the primary keys (pk) are the `word` and `userEmail`.

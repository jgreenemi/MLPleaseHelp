/* To add new resource entries, make a new dict-like entry at the top of the mlAssets array, like the one below:
{
    "Name": "Parris",
    "Description": "Parris, the automated infrastructure setup tool for machine learning algorithms.",
    "Link": "https://github.com/jgreenemi/Parris",
    "Keywords": "Python, AWS",
    "LastUpdatedDate": "2018/01/28",
},

Note:
- Add new entries to the top of the array, that way the newest entries show up at the top of the page.
- LastUpdatedDate does not get used in the engine, just helps to keep track of when entries were last changed.
- Keywords is a string, not a list. Commas are encouraged for readability but not required.
- Only link to the original repository or the resource's original website, not a blog post or other middle-man
  page, unless that post or article *is* the resource to be shared.
- Entries are displayed in the order they were added to the list. In the future I may introduce logic to do some other
  sorting (i.e. by LastUpdatedDate) but this will depend on what the community finds useful.
*/


var mlAssets = [
{
    "Name": "burrsettles/ml-talks-duolingo",
    "Description": "Example code from Duolingo's internal machine learning dev talk series",
    "Link": "https://github.com/burrsettles/ml-talks-duolingo",
    "Keywords": "examples,Python,Rlang,sklearn,scikit-learn",
    "LastUpdatedDate": "2018/3/11",
},
{
    "Name": "zotroneneis/machine_learning_basics",
    "Description": "Plain python implementations of basic machine learning algorithms",
    "Link": "https://github.com/zotroneneis/machine_learning_basics",
    "Keywords": "examples,python,basics",
    "LastUpdatedDate": "2018/3/11",
},
{
    "Name": "Matplotlib: Writing mathematical expressions",
    "Description": "Examples of text rendering with LaTeX in Python",
    "Link": "https://matplotlib.org/users/mathtext.html",
    "Keywords": "math,examples,library,reference,how-to,LaTeX",
    "LastUpdatedDate": "2018/3/5",
},
{
    "Name": "Machine Learning Applications",
    "Description": "Machine learning application to practical problems such us time series prediction, price stock data prediction, text mining",
    "Link": "http://intelligentonlinetools.com/blog/",
    "Keywords": "machine learning, neural net, classification, stock data prediction",
    "LastUpdatedDate": "2018/2/18",
},
{
    "Name": "Text Analytics Techniques",
    "Description": "Text analytics techniques with word embeddings",
    "Link": "http://ai.intelligentonlinetools.com/ml/",
    "Keywords": "word embeddings, fasttext, word2vec, glove",
    "LastUpdatedDate": "2018/2/18",
},
{
    "Name": "Support Vector Machines From Scratch Part 1: Beginning intuition",
    "Description": "Sam Kirkiles gives an introductory blog post on SVMs.",
    "Link": "https://medium.com/samkirkiles/support-vector-machines-from-scratch-part-1-intuition-c1e6a0ac026b",
    "Keywords": "svm,blog,reading",
    "LastUpdatedDate": "2018/2/10",
},
{
    "Name": "MIT AGI: Artificial General Intelligence with Lex Fridman",
    "Description": "This is the opening lecture for course 6.S099: Artificial General Intelligence. This class is free and open to everyone. Our goal is to take an engineering approach to exploring possible paths toward building human-level intelligence for a better world.",
    "Link": "https://www.youtube.com/watch?v=-GV_A9Js2nM",
    "Keywords": "education,class,lecture,video",
    "LastUpdatedDate": "2018/2/10",
},
{
    "Name": "ANDREW TULLOCH — Machine Learning, Statistics, Systems",
    "Description": "Blog of Andrew Tulloch on mathematics, data science and machine learning.",
    "Link": "http://tullo.ch/",
    "Keywords": "blog, reading, Facebook",
    "LastUpdatedDate": "2018/2/10",
},
{
    "Name": " Attacking Machine Learning with Adversarial Examples",
    "Description": "Adversarial examples are inputs to machine learning models that an attacker has intentionally designed to cause the model to make a mistake; they’re like optical illusions for machines. In this post we’ll show how adversarial examples work across different mediums, and will discuss why securing systems against them can be difficult.",
    "Link": "https://blog.openai.com/adversarial-example-research/",
    "Keywords": "blog,reading,OpenAI",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Deep Reinforcement Learning: Pong from Pixels",
    "Description": "A lengthy blog post from Andrej Karpathy covering reinforcement learning applied to video games.",
    "Link": "http://karpathy.github.io/2016/05/31/rl/",
    "Keywords": "blog,reading,",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "UCL Course on RL",
    "Description": "Advanced Topics  2015 (COMPM050/COMPGI13)  Reinforcement Learning, David Silver",
    "Link": "http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html",
    "Keywords": "education,class,lectures,videos",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Deep RL Bootcamp 26-27 August 2017   |   Berkeley CA",
    "Description": "Reinforcement learning considers the problem of learning to act and is poised to power next generation AI systems, which will need to go beyond input-output pattern recognition (as has sufficed for speech, vision, machine translation) but will have to generate intelligent behavior. Example application domains include robotics, marketing, dialogue, HVAC, optimizing healthcare and supply chains. ​This two-day long bootcamp will teach you the foundations of Deep RL through a mixture of lectures and hands-on lab sessions, so you can go on and build new fascinating applications using these techniques and maybe even push the algorithmic frontier.",
    "Link": "https://sites.google.com/view/deep-rl-bootcamp/lectures",
    "Keywords": "class,education,videos,lectures",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "dennybritz/reinforcement-learning",
    "Description": "Implementation of Reinforcement Learning Algorithms. Python, OpenAI Gym, Tensorflow. Exercises and Solutions to accompany Sutton's Book and David Silver's course. This repository provides code, exercises and solutions for popular Reinforcement Learning algorithms. These are meant to serve as a learning tool to complement the theoretical materials from  Reinforcement Learning: An Introduction (2nd Edition) David Silver's Reinforcement Learning Course",
    "Link": "https://github.com/dennybritz/reinforcement-learning",
    "Keywords": "examples,Denny Britz,",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Chris Albon: Notes On Using Data Science & Artificial Intelligence",
    "Description": "A blog providing many examples of linear algebra and data science basics, preprocessing datasets, data wrangling, visualizations, and more.",
    "Link": "https://chrisalbon.com/",
    "Keywords": "reading,blog,tutorials,examples,math,linear algebra",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "broadinstitute/keras-rcnn",
    "Description": "Keras package for region-based convolutional neural networks",
    "Link": "https://github.com/broadinstitute/keras-rcnn",
    "Keywords": "framework,examples,python",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Deep Deterministic Policy Gradients in TensorFlow",
    "Description": "An example of using TensorFlow in reinforcement learning, from Patrick Emami.",
    "Link": "http://pemami4911.github.io/blog/2016/08/21/ddpg-rl.html",
    "Keywords": "tf,tensorflow,blog,reading,examples,reinforcement learning,rl",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "astorfi/TensorFlow-World-Resources",
    "Description": "📡 Organized & Useful Resources about Deep Learning with TensorFlow",
    "Link": "https://github.com/astorfi/TensorFlow-World-Resources",
    "Keywords": "tensorflow,tf,library,examples",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "aymericdamien/TensorFlow-Examples",
    "Description": "TensorFlow Tutorial and Examples for Beginners with Latest APIs",
    "Link": "https://github.com/aymericdamien/TensorFlow-Examples",
    "Keywords": "tensorflow,tf,library,examples",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Handwritten Digit Recognition with MXNet",
    "Description": "In this tutorial, we’ll give you a step by step walk-through of how to build a hand-written digit classifier using the MNIST dataset. For someone new to deep learning, this exercise is arguably the “Hello World” equivalent.",
    "Link": "https://mxnet.incubator.apache.org/tutorials/python/mnist.html",
    "Keywords": "mxnet,library,tutorial,classification",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "donnemartin/data-science-ipython-notebooks",
    "Description": "Data science Python notebooks: Deep learning (TensorFlow, Theano, Caffe, Keras), scikit-learn, Kaggle, big data (Spark, Hadoop MapReduce, HDFS), matplotlib, pandas, NumPy, SciPy, Python essentials, AWS, and various command lines.",
    "Link": "https://github.com/donnemartin/data-science-ipython-notebooks",
    "Keywords": "examples,notebooks",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "rushter/data-science-blogs",
    "Description": "A curated list of data science blogs http://rushter.com/dsreader/",
    "Link": "https://github.com/rushter/data-science-blogs",
    "Keywords": "blogs,reading,lists",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "GoogleCloudPlatform/cloudml-samples",
    "Description": "Samples for Google Cloud Machine Learning Engine",
    "Link": "https://github.com/GoogleCloudPlatform/cloudml-samples",
    "Keywords": "gcp,google cloud platform,tutorials,",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Podcast — Allen Institute for Artificial Intelligence",
    "Description": "Adversarial Learning is a podcast from AI2 team member Joel Grus about data, data science, and science. NLP Highlights is AI2's podcast for discussing recent and interesting work related to natural language processing. Matt Gardner and Waleed Ammar, research scientists at AI2, give short discussions of papers, and occasionally interview authors about their work.",
    "Link": "http://allenai.org/podcast.html",
    "Keywords": "podcasts,nlp,natural language processing,",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Spotify Labs",
    "Description": "A blog with various posts covering data science topics, design challenge posts, interviews, machine learning applied to music recommendation, etc.",
    "Link": "https://labs.spotify.com/",
    "Keywords": "reading,applied machine learning,data science,music,recommendation systems",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Kaggle",
    "Description": "A widely-used platform for datasets, competitions, and code kernels.",
    "Link": "https://www.kaggle.com/",
    "Keywords": "datasets,competitions",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Datasets from the /r/bigquery Wiki",
    "Description": "The subreddit Wiki for /r/bigquery, featuring many freely-available datasets.",
    "Link": "https://www.reddit.com/r/bigquery/wiki/datasets",
    "Keywords": "datasets,reddit",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "Awesome Public Datasets",
    "Description": "A topic-centric list of high-quality open datasets in public domains. By everyone, for everyone!",
    "Link": "https://github.com/awesomedata/awesome-public-datasets",
    "Keywords": "datasets",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "UCI Machine Learning Repository",
    "Description": " The UCI Machine Learning Repository is a collection of databases, domain theories, and data generators that are used by the machine learning community for the empirical analysis of machine learning algorithms. The archive was created as an ftp archive in 1987 by David Aha and fellow graduate students at UC Irvine.",
    "Link": "http://archive.ics.uci.edu/ml/index.php",
    "Keywords": "datasets,repo",
    "LastUpdatedDate": "2018/2/1",
},
{
    "Name": "MXNet Gluon - Introduction - The Straight Dope",
    "Description": "An introduction to the MXNet Gluon interface for building machine learning models.",
    "Link": "http://gluon.mxnet.io/chapter01_crashcourse/introduction.html",
    "Keywords": "mxnet,library,interface,tools,reading,tutorials",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Arxiv Sanity Preserver",
    "Description": "Built in spare time by @karpathy to accelerate research. A search tool for finding research papers relevant to machine learning and computer science practitioners.",
    "Link": "http://www.arxiv-sanity.com/",
    "Keywords": "Andrej Karpathy,arxiv,tool,meta,papers,reading",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Text Classification Using a Convolutional Neural Network on MXNet",
    "Description": "This tutorial is based of Yoon Kim’s paper on using convolutional neural networks for sentence sentiment classification.",
    "Link": "https://mxnet.incubator.apache.org/tutorials/nlp/cnn.html",
    "Keywords": "mxnet,cnn,convolutional neural network,convnet",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Intro to Statistics: Making Decisions Based on Data",
    "Description": "Statistics is about extracting meaning from data. In this class, we will introduce techniques for visualizing relationships in data and systematic techniques for understanding the relationships using mathematics.",
    "Link": "https://www.udacity.com/course/intro-to-statistics--st101",
    "Keywords": "class,education,udacity,statistics,math",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Machine Learning Glossary by Google",
    "Description": "This glossary defines general machine learning terms as well as terms specific to TensorFlow.",
    "Link": "https://developers.google.com/machine-learning/glossary/",
    "Keywords": "Glossary, Reading, Google, Tensorflow",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Colah's Blog - Theory related to Deep Learning",
    "Description": "Christopher Olah's blog, A Google Brain Research Scientist",
    "Link": "http://colah.github.io/",
    "Keywords": "Blog, Reading, Googlebrain, Theory, DNN, LSTM, RNN, CNN, Convnet",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "React Native Tensorflow",
    "Description": "A TensorFlow inference library for react native ",
    "Link": "https://github.com/reneweb/react-native-tensorflow",
    "Keywords": "React, Tensorflow",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Keras to Tensorflow",
    "Description": "General code to convert a trained keras model into an inference tensorflow model",
    "Link": "https://github.com/amir-abdi/keras_to_tensorflow",
    "Keywords": "Keras, Tensorflow, Conversion",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Reinforcement Learning Examples",
    "Description": "Minimal and Clean Reinforcement Learning Examples ",
    "Link": "https://github.com/rlcode/reinforcement-learning",
    "Keywords": "Keras, DeepRL, RL, Examples",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome Math",
    "Description": "A curated list of awesome mathematics resources ",
    "Link": "https://github.com/rossant/awesome-math",
    "Keywords": "Math, Awesome, List",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Skorch",
    "Description": "A scikit-learn compatible neural network library that wraps pytorch ",
    "Link": "https://github.com/dnouri/skorch",
    "Keywords": "Scikit-learn, Pytorch, Library",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Flashtext",
    "Description": "Extract Keywords from sentence or Replace keywords in sentences. A faster and easier library which replaces regular expressions for NLP purposes",
    "Link": "https://github.com/vi3k6i5/flashtext",
    "Keywords": "Flashtext, Re, Regularexpressions, NLP, Library",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome Speech Recognition Speech Synthesis Papers",
    "Description": "Automatic Speech Recognition, Speaker Verification, Speech Synthesis, Language Modeling papers related to it",
    "Link": "https://github.com/zzw922cn/awesome-speech-recognition-speech-synthesis-papers",
    "Keywords": "Automatic-speech-recognition, Papers, Attention, Seq2seq, language-model, speaker-verification",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Gensim",
    "Description": "Topic Modelling for Humans - Text processing library",
    "Link": "https://github.com/RaRe-Technologies/gensim",
    "Keywords": "Topic-modelling, Information-retrieval, NLP, Word2vec, Text-Summarization, Document-similarity, Fasttext",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Deep NLP models in Pytorch for Stanford CS224n",
    "Description": "Pytorch implementations of various Deep NLP models in cs-224n(Stanford Univ) ",
    "Link": "https://github.com/DSKSD/DeepNLP-models-Pytorch",
    "Keywords": "Pytorch, NLP, DeepNLP, RNN, Stanford, CS224",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome NLP",
    "Description": "A curated list of resources dedicated to Natural Language Processing (NLP) ",
    "Link": "https://github.com/keon/awesome-nlp",
    "Keywords": "Awesome, NLP, DeepNLP, Text-mining",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "CapsuleNet : TensorFLow version",
    "Description": "A Tensorflow implementation of CapsNet(Capsules Net) in Hinton's paper Dynamic Routing Between Capsules ",
    "Link": "https://github.com/naturomics/CapsNet-Tensorflow",
    "Keywords": "Capsule, Capsnet, Hinton, Routing, Tensorflow",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "CapsuleNet : Pytorch version",
    "Description": "A PyTorch implementation of the NIPS 2017 paper Dynamic Routing Between Capsules",
    "Link": "https://github.com/gram-ai/capsule-networks",
    "Keywords": "Capsule, Capsnet, Hinton, Routing, Pytorch",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "CapsuleNet : Keras version",
    "Description": "A Keras implementation of CapsNet in NIPS2017 paper Dynamic Routing Between Capsules. Now test error ＝ 0.34%. ",
    "Link": "https://github.com/XifengGuo/CapsNet-Keras",
    "Keywords": "Capsule, Capsnet, Hinton, Routing, Keras",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Keras Resources by François Chollet",
    "Description": "Directory of tutorials and open-source code repositories for working with Keras, the Python deep learning library ",
    "Link": "https://github.com/fchollet/keras-resources",
    "Keywords": "Keras, Resources",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Pytorch Tutorials",
    "Description": "PyTorch Tutorial for Deep Learning Researchers",
    "Link": "https://github.com/yunjey/pytorch-tutorial",
    "Keywords": "Pytorch, Resources",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Deep Reinforcement Learning paper implementations using Tensorflow",
    "Description": "TensorFlow implementation of Deep Reinforcement Learning papers ",
    "Link": "https://github.com/carpedm20/deep-rl-tensorflow",
    "Keywords": "Tensorflow, DeepRL, Papers, DQN",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Pytorch Examples",
    "Description": "Simple examples to introduce PyTorch ",
    "Link": "https://github.com/jcjohnson/pytorch-examples",
    "Keywords": "Pytorch, Examples",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name": "Awesome ML for cybersecurity",
    "Description": "Machine Learning for Cyber Security ",
    "Link": "https://github.com/jivoi/awesome-ml-for-cybersecurity",
    "Keywords": "Cyber-security, Awesome, ML, Papers",
    "LastUpdatedDate": "2018/1/31",
},
{
    "Name":"Learn OpenCV",
    "Description":"Tutorial on OpenCV with machine learning and deep learning",
    "Link" : "http://www.learnopencv.com/",
    "Keywords": "Image Processing,Opencv,Image",
    "LastUpdatedDate" : "2018/02/01",
},
{
    "Name":"Good books for learning AI",
    "Description":"Books for Learning Artificial Intelligence",
    "Link" : "https://www.analyticsvidhya.com/blog/2015/10/read-books-for-beginners-machine-learning-artificial-intelligence/",
    "Keywords": "Books,Artificial Intelligence,AI,analyticsvidhya",
    "LastUpdatedDate" : "2018/02/01",
},
{
    "Name":"Chess AI",
    "Description":"building simple AI for playing chess",
    "Link" : "https://medium.freecodecamp.org/simple-chess-ai-step-by-step-1d55a9266977",
    "Keywords": "Artificial Intelligence,AI,Chess,Tutorial",
    "LastUpdatedDate" : "2018/02/01",
},
{
    "Name":"Momentum",
    "Description" : "Why Momentum Really Works?",
    "Link" : "https://distill.pub/2017/momentum/",
    "Keywords": "Momentum, Optimizer",
    "LastUpdatedDate" : "2018/01/31",
},
{
    "Name": "Introduction to Applied Linear Algebra – Vectors, Matrices, and Least Squares",
    "Description": "Book on Linear Algebra from Stephen Boyd and Lieven Vandenberghe",
    "Link": "https://web.stanford.edu/%7Eboyd/vmls/",
    "Keywords": "book, reading, math",
    "LastUpdatedDate": "2018/1/30",
},
{
    "Name": "cnn-text-classification-tf: Implementing a CNN for Text Classification in TensorFlow",
    "Description": "Convolutional Neural Network for Text Classification in Tensorflow by Denny Britz",
    "Link": "https://github.com/dennybritz/cnn-text-classification-tf",
    "Keywords": "library, examples, tf, cnn, reading, blog",
    "LastUpdatedDate": "2018/1/30",
},
{
    "Name": "deeplearning.ai",
    "Description": "Courses served via Coursera with a focus in deep learning, provided by noted machine learning professor Andrew Ng.",
    "Link": "https://www.deeplearning.ai/",
    "Keywords": "deep learning, neural networks, courses, classes, education, coursera",
    "LastUpdatedDate": "2018/1/30",
},
{
    "Name": "Various Machine Learning Books",
    "Description": "Important books for Machine Learning and DBMS and programming languages",
    "Link": "https://github.com/jonesgithub/book-1",
    "Keywords": "ML, Education, Blog, Reading, Bishop, Pattern Recognition, Kevin Murphy",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Reinforcement Learning : An Introduction",
    "Description": "Authored by Sutton and Barto, second edition, still in draft",
    "Link": "http://incompleteideas.net/book/the-book-2nd.html",
    "Keywords": "RL, Education, Reading, Reinforcement Learning",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Fast AI Part 1 v2",
    "Description": "YouTube playlist of the fastai course part 1 Practical Deep Learning using pytorch",
    "Link": "https://www.youtube.com/watch?v=IPBSB1HLNLo&list=PLgnu9apxPERz1GZe3R5LP2I0cYh_ZqjZa",
    "Keywords": "Fastai, Education, Reading, Deep Learning, Video, Pytorch",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Deep Learning Book",
    "Description": "Authored by the Deep Learning giants like Ian Goodfellow, Yoshua Bengio etc",
    "Link": "http://www.deeplearningbook.org/",
    "Keywords": "Bible, Education, Reading, Deep Learning, Book",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Deep Learning Book Accompanying Video Lectures",
    "Description": "YouTube playlist of the chapters belonging to Deep Learning Book",
    "Link": "https://www.youtube.com/playlist?list=PLnH7E0IG44jGzhQ9OS2XdBtuNLhaqJhJG",
    "Keywords": "Bible, Education, Reading, Deep Learning, Book, Video, Lectures",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Oxford : Deep Natural Language Processing lectures",
    "Description": "2017 Oxford Deep NLP lectures: slides and videos.",
    "Link": "https://github.com/oxford-cs-deepnlp-2017/lectures",
    "Keywords": "Class, Education, Blog, Reading, NLP, DeepNLP",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "VisualData",
    "Description": "Computer Vision Datasets",
    "Link": "https://www.visualdata.io/",
    "Keywords": "CV, Computervision, Datasets",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Deep Learning for Music",
    "Description": "List of articles related to deep learning applied to music ",
    "Link": "https://github.com/ybayle/awesome-deep-learning-music",
    "Keywords": "Awesome, Music, Informationretrieval, Audioprocessing, Audio",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Uber Deep Neuroevolution",
    "Description": "Deep Neuroevolution algorithms",
    "Link": "https://github.com/uber-common/deep-neuroevolution",
    "Keywords": "Neuroevolution, Uber, Research",
    "LastUpdatedDate": "2018/01/30",
},
{
    "Name": "Neural Networks and Deep Learning",
    "Description": "Neural Networks and Deep Learning is a free online book. The book will teach you about:  Neural networks, a beautiful biologically-inspired programming paradigm which enables a computer to learn from observational data, and Deep learning, a powerful set of techniques for learning in neural networks",
    "Link": "http://neuralnetworksanddeeplearning.com/",
    "Keywords": "Neural Networks, Deep Learning",
    "LastUpdatedDate": "2018/1/29",
},
{
    "Name": "Roadmap to Machine Learning",
    "Description": "A complete, open source roadmap designed to take you from zero knowledge up to machine learning expertise. It includes resources such as ML and relevant math/programming courses, books and public datasets.",
    "Link": "https://howicodestuff.github.io/machine_learning/2018/01/12/a-roadmap-to-machine-learning.html",
    "Keywords": "Roadmap, Python, Blog, Education, Reading",
    "LastUpdatedDate": "2018/01/29",
},
{
    "Name": "Stanford CS109 Course Reader",
    "Description": "Probability for Computer Scientists From Counting to Deep Learning",
    "Link": "http://web.stanford.edu/class/cs109/courseReader.html",
    "Keywords": "Class, Education, Blog, Reading",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "MIT 6.S099: Artificial General Intelligence",
    "Description": "This class takes an engineering approach to exploring possible research paths toward building human-level intelligence. The lectures will introduce our current understanding of computational intelligence and ways in which strong AI could possibly be achieved, with insights from deep learning, reinforcement learning, computational neuroscience, robotics, cognitive modeling, psychology, and more.",
    "Link": "https://agi.mit.edu/",
    "Keywords": "Class, Education, Reading",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Conv Nets: A Modular Perspective",
    "Description": "This post is part of a series on convolutional neural networks and their generalizations.",
    "Link": "http://colah.github.io/posts/2014-07-Conv-Nets-Modular/",
    "Keywords": "Blog, CNN, Reading",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "evolution-strategies-starter",
    "Description": "This is a distributed implementation of the algorithm described in Evolution Strategies as a Scalable Alternative to Reinforcement Learning (Tim Salimans, Jonathan Ho, Xi Chen, Ilya Sutskever).",
    "Link": "https://github.com/openai/evolution-strategies-starter",
    "Keywords": "Python",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Nvidia-docker",
    "Description": "Build and run Docker containers leveraging NVIDIA GPUs",
    "Link": "https://github.com/NVIDIA/nvidia-docker",
    "Keywords": "Makefile, Shell",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Keras",
    "Description": "Deep Learning for humans http://keras.io/",
    "Link": "https://github.com/keras-team/keras",
    "Keywords": "Python, Library",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "NapkinML",
    "Description": "A tiny lib with pocket-sized implementations of machine learning models in NumPy.",
    "Link": "https://github.com/eriklindernoren/NapkinML",
    "Keywords": "Python",
    "LastUpdatedDate": "2018/01/28",
},
{
    "Name": "Parris",
    "Description": "Parris, the automated infrastructure setup tool for machine learning algorithms.",
    "Link": "https://github.com/jgreenemi/Parris",
    "Keywords": "Python, AWS",
    "LastUpdatedDate": "2018/01/28",
},
]

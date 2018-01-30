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
{
    "Name":"Momentum",
    "Description" : "Why Momentum Really Works?",
    "Link" : "https://distill.pub/2017/momentum/",
    "Keywords": "Momentum, Optimizer",
    "LastUpdatedDate" : "2018/01/31",

},
]

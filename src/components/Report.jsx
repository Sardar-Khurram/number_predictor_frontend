import React, { useState, useEffect } from "react";

const Report = () => {
    const sections = [
        { id: "introduction", title: "Introduction" },
        { id: "methodology", title: "Methodology" },
        { id: "dataset", title: "Dataset Preparation" },
        { id: "models", title: "Models Used" },
        { id: "evaluation", title: "Evaluation Metrics" },
        { id: "results", title: "Results" },
        { id: "discussion", title: "Discussion" },
        { id: "conclusion", title: "Conclusion" }
    ];

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    if (top < window.innerHeight * 0.3) {
                        currentSection = section.id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex">
            {/* Sidebar Navigation */}
            <nav className="w-64 h-screen bg-gray-100 p-4 sticky top-0 hidden md:flex flex-col">
                <h2 className="text-xl font-bold mb-4">Sections</h2>
                <ul>
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`cursor-pointer p-2 rounded ${activeSection === section.id ? "bg-gray-400 text-white" : "hover:bg-gray-200"
                                }`}
                        >
                            {section.title}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Report Content */}
            <div className="max-w-4xl mx-auto px-6 md:p-6 text-gray-900">
                <h1 className="text-3xl font-bold text-center mb-4">
                    Classification of MNIST Handwritten Digits Using Machine Learning
                </h1>
                <hr className="mb-6 border-gray-300" />

                {/* Introduction */}
                <section id="introduction" className="mb-4 md:mb-6 px-4 md:px-0">
                    <h2 className="text-lg md:text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        The <strong>MNIST dataset</strong> is a widely used benchmark in the field of machine learning and computer vision.
                        It consists of <strong>28x28 grayscale images</strong> of handwritten digits (0-9), each flattened into a <strong>1D vector
                            of 784 features</strong>. The dataset is split into training and testing sets, stored in CSV files (<strong>mnist_train.csv</strong>
                        and <strong>mnist_test.csv</strong>). The objective of this lab is to experiment with various machine learning models, evaluate
                        their performance, and identify the best-performing model for classifying handwritten digits.
                        <br />
                        This report documents the methodology, results, and analysis of the classification task using
                        <strong> Logistic Regression, Random Forest, K-Nearest Neighbors (KNN), and Neural Network (MLP)</strong> models.
                        The models were trained, tuned, and evaluated based on accuracy, precision, recall, and F1-score.
                    </p>
                </section>


                {/* Methodology */}
                <section id="methodology" className="mb-4 md:mb-6 px-4 md:px-0">
                    <h2 className="text-lg md:text-2xl font-semibold mb-2">2. Methodology</h2>

                    <h3 id="dataset" className="text-base md:text-xl font-medium mt-4 mb-1">2.1 Dataset Preparation</h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        The dataset was loaded into <strong>Pandas DataFrames</strong> for easy manipulation and analysis. The training and testing
                        datasets were split into features (<code>X_train</code>, <code>X_test</code>) and labels (<code>y_train</code>, <code>y_test</code>).
                        The dataset was already preprocessed, with images flattened into <strong>784 features</strong> and labels provided for each image.
                    </p>

                    <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto text-xs md:text-sm">
                        <code>
                            {`import pandas as pd
train_file_path = "mnist_train.csv"
test_file_path = "mnist_test.csv"
df_train = pd.read_csv(train_file_path)
df_test = pd.read_csv(test_file_path)

X_train = df_train.drop(columns=['label'])
y_train = df_train[['label']]
X_test = df_test.drop(columns=['label'])
y_test = df_test[['label']]`}
                        </code>
                    </pre>

                    <h3 id="models" className="text-base md:text-xl font-medium mt-4 mb-1">2.2 Models Used</h3>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg md:text-2xl font-bold mb-4">2.2 Model Details</h2>

                        {/* Logistic Regression */}
                        <div className="mb-6 p-4 border-l-4 border-blue-500 bg-gray-50">
                            <h3 className="text-base md:text-xl font-semibold">2.2.1 Logistic Regression</h3>
                            <p className="mt-2"><strong>Hyperparameters Tuned:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>max_iter: [5, 10, 20]</code></li>
                                <li><code>solver: ["lbfgs", "saga"]</code></li>
                            </ul>
                            <p className="mt-2"><strong>Best Configuration:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>max_iter: 10</code></li>
                                <li><code>solver: "saga"</code></li>
                            </ul>
                            <p className="mt-2 text-blue-600 font-semibold text-sm md:text-base">Accuracy: 92.64%</p>
                        </div>

                        {/* Random Forest */}
                        <div className="mb-6 p-4 border-l-4 border-green-500 bg-gray-50">
                            <h3 className="text-base md:text-xl font-semibold">2.2.2 Random Forest</h3>
                            <p className="mt-2"><strong>Hyperparameters Tuned:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>n_estimators: [5, 10, 20]</code></li>
                                <li><code>max_depth: [None, 20, 30]</code></li>
                            </ul>
                            <p className="mt-2"><strong>Best Configuration:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>n_estimators: 20</code></li>
                                <li><code>max_depth: 30</code></li>
                            </ul>
                            <p className="mt-2 text-green-600 font-semibold text-sm md:text-base">Accuracy: 96.10%</p>
                        </div>

                        {/* KNN */}
                        <div className="mb-6 p-4 border-l-4 border-yellow-500 bg-gray-50">
                            <h3 className="text-base md:text-xl font-semibold">2.2.3 K-Nearest Neighbors (KNN)</h3>
                            <p className="mt-2"><strong>Hyperparameters Tuned:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>n_neighbors: [1, 3, 5]</code></li>
                            </ul>
                            <p className="mt-2"><strong>Best Configuration:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>n_neighbors: 3</code></li>
                            </ul>
                            <p className="mt-2 text-yellow-600 font-semibold text-sm md:text-base">Accuracy: 97.05%</p>
                        </div>

                        {/* Neural Network */}
                        <div className="mb-6 p-4 border-l-4 border-red-500 bg-gray-50">
                            <h3 className="text-base md:text-xl font-semibold">2.2.4 Neural Network (MLP)</h3>
                            <p className="mt-2"><strong>Hyperparameters Tuned:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>hidden_layer_sizes: [(64,), (128, 64), (256, 128, 64), (512, 256, 128), (1024, 512, 256)]</code></li>
                                <li><code>max_iter: 50</code></li>
                            </ul>
                            <p className="mt-2"><strong>Best Configuration:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 text-sm md:text-base">
                                <li><code>hidden_layer_sizes: (1024, 512, 256)</code></li>
                                <li><code>max_iter: 50</code></li>
                            </ul>
                            <p className="mt-2 text-red-600 font-semibold text-sm md:text-base">Accuracy: 98.13%</p>
                        </div>
                    </div>
                </section>


                {/* Evaluation Metrics */}
                <section id="evaluation" className="mb-4 md:mb-6 px-4 md:px-0">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                        <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">2.3 Evaluation Metrics</h2>

                        <p className="mt-2 text-gray-700 text-sm md:text-base">
                            The performance of each model was evaluated using the following metrics:
                        </p>

                        <ul className="list-disc list-inside ml-4 text-gray-700 mt-2 text-sm md:text-base">
                            <li><strong>Accuracy:</strong> Percentage of correctly classified samples.</li>
                            <li><strong>Precision:</strong> Ratio of true positives to the total predicted positives.</li>
                            <li><strong>Recall:</strong> Ratio of true positives to the total actual positives.</li>
                            <li><strong>F1-Score:</strong> Harmonic mean of precision and recall.</li>
                        </ul>

                        <p className="mt-4 text-gray-700 text-sm md:text-base">
                            Confusion matrices were also plotted to visualize the misclassifications.
                        </p>
                    </div>
                </section>


                {/* Results */}
                <section id="results" className="mb-4 md:mb-6 px-4 md:px-0">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                        <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">3. Results</h2>

                        <h3 className="text-base md:text-xl font-semibold mt-2 md:mt-4">3.1 Model Performance Comparison</h3>
                        <p className="mt-2 text-gray-700 text-sm md:text-base">The table below summarizes the performance of the models:</p>

                        <div className="overflow-x-auto mt-2 md:mt-4">
                            <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-2 md:px-4 py-2">Model</th>
                                        <th className="border border-gray-300 px-2 md:px-4 py-2">Accuracy</th>
                                        <th className="border border-gray-300 px-2 md:px-4 py-2">Precision</th>
                                        <th className="border border-gray-300 px-2 md:px-4 py-2">Recall</th>
                                        <th className="border border-gray-300 px-2 md:px-4 py-2">F1-Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">Logistic Regression</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">92.64%</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9263</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9264</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9263</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">Random Forest</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">96.10%</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9610</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9610</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9610</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">K-Nearest Neighbors</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">97.05%</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9707</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9705</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9705</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">Neural Network (MLP)</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">98.13%</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9814</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9813</td>
                                        <td className="border border-gray-300 px-2 md:px-4 py-2">0.9813</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-base md:text-xl font-semibold mt-4 md:mt-6">3.2 Confusion Matrix Insights</h3>
                        <p className="mt-2 text-gray-700 text-sm md:text-base">The confusion matrices revealed common misclassifications, such as:</p>
                        <ul className="list-disc list-inside ml-4 text-gray-700 mt-2 text-sm md:text-base">
                            <li><strong>7</strong> predicted as <strong>1</strong></li>
                            <li><strong>4</strong> predicted as <strong>9</strong></li>
                            <li><strong>9</strong> predicted as <strong>0</strong></li>
                            <li><strong>7</strong> predicted as <strong>4</strong></li>
                        </ul>
                        <p className="mt-4 text-gray-700 text-sm md:text-base">
                            These misclassifications are likely due to the similarity in shapes and strokes of certain digits.
                        </p>

                        <h3 className="text-base md:text-xl font-semibold mt-4 md:mt-6">3.3 Model Performance Ranking</h3>
                        <ul className="list-decimal list-inside ml-4 text-gray-700 mt-2 text-sm md:text-base">
                            <li><strong>Neural Network (MLP):</strong> Best-performing model with an accuracy of 98.13%.</li>
                            <li><strong>K-Nearest Neighbors (KNN):</strong> Second-best with an accuracy of 97.05%.</li>
                            <li><strong>Random Forest:</strong> Performed well with an accuracy of 96.10%.</li>
                            <li><strong>Logistic Regression:</strong> Weakest model with an accuracy of 92.64%.</li>
                        </ul>
                    </div>
                </section>


                {/* Discussion */}
                <section id="discussion" className="mb-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold mb-4">4. Discussion</h2>

                        <h3 class="text-xl font-semibold mt-4">4.1 Best Performing Model</h3>
                        <p class="mt-2 text-gray-700">
                            The <strong>Neural Network (MLP)</strong> achieved the highest accuracy (98.13%) and F1-score (0.9813), making it the most effective model for this classification task. Its ability to capture complex patterns in the data, combined with the optimal hyperparameters, contributed to its superior performance.
                        </p>

                        <h3 class="text-xl font-semibold mt-6">4.2 Trade-offs</h3>
                        <ul class="list-disc list-inside ml-4 text-gray-700 mt-2">
                            <li><strong>Neural Network (MLP):</strong> While it offers the best performance, it is computationally expensive and less interpretable.</li>
                            <li><strong>K-Nearest Neighbors (KNN):</strong> Provides strong performance with relatively simple implementation but can be slow for large datasets.</li>
                            <li><strong>Random Forest:</strong> Balances interpretability and performance, making it a good choice for applications where understanding the model's decisions is important.</li>
                            <li><strong>Logistic Regression:</strong> Simple and efficient but less effective for complex datasets like MNIST.</li>
                        </ul>

                        <h3 class="text-xl font-semibold mt-6">4.3 Misclassification Analysis</h3>
                        <p class="mt-2 text-gray-700">
                            The confusion matrices highlighted that digits with similar shapes (e.g., <strong>7 and 1, 4 and 9</strong>) were occasionally misclassified. This suggests that future work could focus on improving feature extraction or using more advanced models like <strong>Convolutional Neural Networks (CNNs)</strong> to better distinguish between similar digits.
                        </p>
                    </div>

                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">5. Conclusion</h2>

                        <p className="mt-2 text-gray-700">
                            In this lab, four machine learning models were trained and evaluated on the
                            <strong className="text-blue-600"> MNIST dataset</strong>. The
                            <strong className="text-blue-600"> Neural Network (MLP)</strong> emerged as the best-performing model with an accuracy of
                            <strong> 98.13%</strong>. The <strong> K-Nearest Neighbors (KNN)</strong> and <strong> Random Forest</strong> models
                            also demonstrated strong performance, while <strong> Logistic Regression</strong> lagged behind due to its linear nature.
                        </p>

                        <p className="mt-2 text-gray-700">
                            The results indicate that more complex models like <strong className="text-blue-600"> Neural Networks</strong>
                            are better suited for high-dimensional data like image classification. However, simpler models such as
                            <strong> Random Forest</strong> and <strong> KNN</strong> remain viable when interpretability and computational efficiency
                            are prioritized.
                        </p>

                        {/* Future Work */}
                        <h3 className="text-xl font-semibold mt-6">5.1 Future Work</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-700 mt-2">
                            <li>Experiment with <strong>Convolutional Neural Networks (CNNs)</strong> for improved feature extraction.</li>
                            <li>Explore <strong>data augmentation techniques</strong> to reduce misclassifications.</li>
                            <li>Investigate <strong>ensemble methods</strong> to combine multiple models' strengths.</li>
                            <li>Apply <strong>hyperparameter tuning</strong> for further optimization.</li>
                        </ul>

                        {/* Saving the Best Model */}
                        <h3 className="text-xl font-semibold mt-6">5.2 Saving the Best Model</h3>
                        <p className="mt-2 text-gray-700">
                            The best-performing model (<strong className="text-blue-600">Neural Network</strong>) was saved for future use:
                        </p>

                        {/* Responsive Code Block */}
                        <div className="overflow-x-auto mt-4">
                            <pre className="bg-gray-100 p-4 rounded-lg text-xs md:text-sm text-gray-800">
                                <code>
                                    import joblib{"\n"}
                                    joblib.dump(best_mlp_model, "best_mlp_model.pkl")
                                </code>
                            </pre>
                        </div>

                        <p className="mt-4 text-gray-700">
                            This concludes the report on the classification of MNIST handwritten digits using machine learning.
                        </p>
                    </div>
                </section>


                <hr className="mt-6 border-gray-300" />
                <p className="text-center text-sm text-gray-600">End of Report</p>
            </div>
        </div>
    );
};

export default Report;
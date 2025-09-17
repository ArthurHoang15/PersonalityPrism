const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');

const resultsContainer = document.getElementById('results-container');
const resultSuggestion = document.getElementById('result-suggestion');

// Bộ câu hỏi và câu trả lời
const questions = [
    {
        question: "Từ nào mô tả đúng nhất về phong cách làm việc của bạn?",
        answers: [
            { text: "Gần gũi: Tạo không khí thoải mái, dễ chịu cho mọi người xung quanh.", committee: "HR" },
            { text: "Sáng tạo: Luôn tìm kiếm những ý tưởng độc đáo, mới mẻ.", committee: "PR" },
            { text: "Linh hoạt: Thích ứng nhanh với sự thay đổi của môi trường.", committee: "EV" },
            { text: "Kỹ lưỡng: Chú ý đến từng chi tiết nhỏ, đảm bảo mọi thứ hoàn hảo.", committee: "FER" },
            { text: "Logic: Suy nghĩ có hệ thống, giải quyết vấn đề bằng lý trí.", committee: "Tech" }
        ]
    },
    {
        question: "Bạn thấy tự hào nhất khi bạn là…",
        answers: [
            { text: "Người hỗ trợ mọi người trong team cảm thấy thoải mái và gắn bó.", committee: "HR" },
            { text: "Người tạo một chiến dịch truyền thông được nhiều người biết đến.", committee: "PR" },
            { text: "Người tổ chức một sự kiện thành công tốt đẹp.", committee: "EV" },
            { text: "Người kiểm soát tài chính – đối ngoại của CLB vận hành ổn định.", committee: "FER" },
            { text: "Người giải quyết các vấn đề kỹ thuật một cách trơn tru.", committee: "Tech" }
        ]
    },
    {
        question: "Nếu bạn là “mảnh ghép” trong đội nhóm, bạn sẽ là…",
        answers: [
            { text: "Người kết nối và động viên mọi người.", committee: "HR" },
            { text: "Người đưa ra ý tưởng, tạo cảm hứng.", committee: "PR" },
            { text: "Người sắp xếp công việc, kiểm soát timeline.", committee: "EV" },
            { text: "Người đảm bảo tài chính và đối ngoại.", committee: "FER" },
            { text: "Người xử lý kỹ thuật, công cụ hỗ trợ.", committee: "Tech" }
        ]
    },
    {
        question: "Khi CLB chuẩn bị tổ chức một sự kiện lớn, bạn sẽ chủ động chọn làm gì?",
        answers: [
            { text: "Kết nối thành viên, phân công nhiệm vụ, giữ tinh thần đội nhóm.", committee: "HR" },
            { text: "Lên ý tưởng poster, quay video, viết caption truyền thông.", committee: "PR" },
            { text: "Viết kế hoạch chương trình, điều phối hoạt động.", committee: "EV" },
            { text: "Tìm nguồn tài trợ, quản lý chi phí, làm báo cáo tài chính.", committee: "FER" },
            { text: "Chuẩn bị kỹ thuật, hỗ trợ công nghệ.", committee: "Tech" }
        ]
    },
    {
        question: "Khi xảy ra bất đồng giữa các thành viên trong nhóm, bạn sẽ làm gì?",
        answers: [
            { text: "Làm trung gian hòa giải, lắng nghe từ hai phía để tìm ra tiếng nói chung.", committee: "HR" },
            { text: "Đề xuất một giải pháp hoàn toàn mới, sáng tạo để cả hai bên cùng có lợi.", committee: "PR" },
            { text: "Đưa ra lộ trình và các bước cụ thể để giải quyết vấn đề nhanh chóng.", committee: "EV" },
            { text: "Phân tích thiệt hơn rõ ràng dựa trên ngân sách và nguồn lực hiện có.", committee: "FER" },
            { text: "Phân tích vấn đề một cách logic, dựa trên dữ liệu để ra quyết định khách quan.", committee: "Tech" }
        ]
    },
    {
        question: "Khi làm bài tập nhóm, bạn thích đảm nhận vai trò nào nhất?",
        answers: [
            { text: "Phân chia công việc, kết nối các thành viên.", committee: "HR" },
            { text: "Viết nội dung, làm slide đẹp.", committee: "PR" },
            { text: "Chuẩn bị hậu cần cho buổi thuyết trình.", committee: "EV" },
            { text: "Đại diện nhóm, làm việc với giảng viên hoặc thuyết trình chính.", committee: "FER" },
            { text: "Code, thiết kế hay xử lý kỹ thuật.", committee: "Tech" }
        ]
    },
    {
        question: "Một kết quả khiến bạn hứng thú:",
        answers: [
            { text: "Quản lý được một team đông người.", committee: "HR" },
            { text: "Bài đăng của mình được viral.", committee: "PR" },
            { text: "Sự kiện dù đông người nhưng diễn ra vẫn trơn tru.", committee: "EV" },
            { text: "Deal thành công một gói tài trợ.", committee: "FER" },
            { text: "Fix xong một bug khó.", committee: "Tech" }
        ]
    },
    {
        question: "Điều gì khiến bạn cảm thấy có động lực làm việc nhất?",
        answers: [
            { text: "Môi trường hòa đồng, mọi người tin tưởng và giúp đỡ lẫn nhau.", committee: "HR" },
            { text: "Được tự do thể hiện ý tưởng cá nhân và thấy nó được hiện thực hóa.", committee: "PR" },
            { text: "Nhìn thấy một kế hoạch được thực hiện một cách trơn tru và chỉn chu.", committee: "EV" },
            { text: "Đạt được những thỏa thuận có lợi và thấy sự phát triển tài chính vững mạnh.", committee: "FER" },
            { text: "Được đắm mình vào những vấn đề hóc búa và tìm ra giải pháp tối ưu.", committee: "Tech" }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = {
    HR: 0,
    PR: 0,
    EV: 0,
    FER: 0,
    Tech: 0
};

const committeeInfo = {
    HR: { name: "Nhân sự (HR)", color: "bg-rose-500" },
    PR: { name: "Truyền thông (PR)", color: "bg-amber-500" },
    EV: { name: "Sự kiện (EV)", color: "bg-emerald-500" },
    FER: { name: "Đối ngoại (FER)", color: "bg-violet-500" },
    Tech: { name: "Kỹ thuật (Tech)", color: "bg-sky-500" }
};

function startQuiz() {
    currentQuestionIndex = 0;
    scores = { HR: 0, PR: 0, EV: 0, FER: 0, Tech: 0 };
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('fade-in');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    
    // Cập nhật thanh tiến độ
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    questionCounter.innerText = `Câu ${currentQuestionIndex + 1}/${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('answer-btn', 'w-full', 'p-4', 'text-left', 'bg-white', 'rounded-lg', 'border', 'border-slate-200', 'shadow-sm', 'hover:bg-blue-100', 'hover:border-blue-400', 'transition-all', 'duration-300', 'text-slate-700');
        button.addEventListener('click', () => selectAnswer(answer.committee));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(committee) {
    scores[committee]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        quizScreen.classList.remove('fade-in');
        setTimeout(() => {
            showQuestion();
            quizScreen.classList.add('fade-in');
        }, 100);
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('fade-in');
    resultsContainer.innerHTML = '';

    const totalAnswers = questions.length;
    
    // Tìm ban có điểm cao nhất
    let maxScore = -1;
    let bestFitCommittee = '';
    for (const committee in scores) {
        if (scores[committee] > maxScore) {
            maxScore = scores[committee];
            bestFitCommittee = committee;
        }
    }

    resultSuggestion.innerHTML = `
    Dựa trên câu trả lời của bạn, có vẻ bạn phù hợp nhất với<br>
    <span class="font-bold text-blue-600 text-xl">Ban ${committeeInfo[bestFitCommittee].name}</span>
`;
    
    const sortedCommittees = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    sortedCommittees.forEach(committee => {
        const percentage = Math.round((scores[committee] / totalAnswers) * 100);
        
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="font-semibold text-slate-700">${committeeInfo[committee].name}</span>
                <span class="font-bold text-blue-600">${percentage}%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-4">
                <div class="h-4 rounded-full result-bar" style="width: ${percentage}%; background-color: ${getCommitteeColor(committee)};"></div>
            </div>
        `;
        resultsContainer.appendChild(resultElement);
    });
}

function getCommitteeColor(committee) {
    const colors = {
        HR: '#ef4444',   // red-500
        PR: '#f59e0b',   // amber-500
        EV: '#10b981',   // emerald-500
        FER: '#8b5cf6',  // violet-500
        Tech: '#3b82f6'  // blue-500
    };
    return colors[committee] || '#64748b'; // slate-500
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    startScreen.classList.add('fade-in');
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
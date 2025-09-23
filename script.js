const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');

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
            { text: "Phân tích: Giải quyết các vấn đề thực tiễn dựa trên dữ liệu và suy nghĩ logic.", committee: "Tech" }
        ]
    },
    {
        question: "Bạn thấy tự hào nhất khi bạn là…",
        answers: [
            { text: "Người tổ chức một sự kiện thành công tốt đẹp.", committee: "EV" },
            { text: "Người hỗ trợ mọi người trong team cảm thấy thoải mái và gắn bó.", committee: "HR" },
            { text: "Người phát triển sản phẩm hoặc biến dữ liệu thô thành insight giá trị.", committee: "Tech" },
            { text: "Người tạo một chiến dịch truyền thông được nhiều người biết đến.", committee: "PR" },
            { text: "Người kiểm soát tài chính – đối ngoại của CLB vận hành ổn định.", committee: "FER" }
        ]
    },
    {
        question: "Nếu bạn là “mảnh ghép” trong đội nhóm, bạn sẽ là…",
        answers: [
            { text: "Người đảm bảo tài chính và đối ngoại.", committee: "FER" },
            { text: "Người sắp xếp công việc, kiểm soát timeline.", committee: "EV" },
            { text: "Người đưa ra ý tưởng, tạo cảm hứng.", committee: "PR" },
            { text: "Người cung cấp giải pháp kỹ thuật, phát triển công nghệ.", committee: "Tech" },
            { text: "Người kết nối và động viên mọi người.", committee: "HR" }
        ]
    },
    {
        question: "Khi CLB chuẩn bị tổ chức một sự kiện lớn, bạn sẽ chủ động chọn làm gì?",
        answers: [
            { text: "Lên ý tưởng poster, quay video, viết caption truyền thông.", committee: "PR" },
            { text: "Xây dựng sản phẩm và phân tích dữ liệu để hỗ trợ công nghệ.", committee: "Tech" },
            { text: "Kết nối thành viên, phân công nhiệm vụ, giữ tinh thần đội nhóm.", committee: "HR" },
            { text: "Tìm nguồn tài trợ, quản lý chi phí, làm báo cáo tài chính.", committee: "FER" },
            { text: "Viết kế hoạch chương trình, điều phối hoạt động.", committee: "EV" }
        ]
    },
    {
        question: "Khi xảy ra bất đồng giữa các thành viên trong nhóm, bạn sẽ làm gì?",
        answers: [
            { text: "Phân tích vấn đề một cách logic, dựa trên dữ liệu để ra quyết định khách quan.", committee: "Tech" },
            { text: "Đưa ra lộ trình và các bước cụ thể để giải quyết vấn đề nhanh chóng.", committee: "EV" },
            { text: "Làm trung gian hòa giải, lắng nghe từ hai phía để tìm ra tiếng nói chung.", committee: "HR" },
            { text: "Đề xuất một giải pháp hoàn toàn mới, sáng tạo để cả hai bên cùng có lợi.", committee: "PR" },
            { text: "Phân tích thiệt hơn rõ ràng dựa trên ngân sách và nguồn lực hiện có.", committee: "FER" }
        ]
    },
    {
        question: "Khi làm bài tập nhóm, bạn thích đảm nhận vai trò nào nhất?",
        answers: [
            { text: "Viết nội dung, làm slide đẹp.", committee: "PR" },
            { text: "Đại diện nhóm, làm việc với giảng viên hoặc thuyết trình chính.", committee: "FER" },
            { text: "Phân chia công việc, kết nối các thành viên.", committee: "HR" },
            { text: "Lập trình, phân tích hệ thống hoặc biến những bộ dữ liệu phức tạp trở nên ý nghĩa.", committee: "Tech" },
            { text: "Chuẩn bị hậu cần cho buổi thuyết trình.", committee: "EV" }
        ]
    },
    {
        question: "Một kết quả khiến bạn hứng thú:",
        answers: [
            { text: "Deal thành công một gói tài trợ.", committee: "FER" },
            { text: "Triển khai thành công một tính năng hoặc trực quan hóa dữ liệu phức tạp", committee: "Tech" },
            { text: "Sự kiện dù đông người nhưng diễn ra vẫn trơn tru.", committee: "EV" },
            { text: "Quản lý được một team đông người.", committee: "HR" },
            { text: "Bài đăng của mình được viral.", committee: "PR" }
        ]
    },
    {
        question: "Điều gì khiến bạn cảm thấy có động lực làm việc nhất?",
        answers: [
            { text: "Được ứng dụng công nghệ để giải quyết vấn đề thực tiễn và nâng cao năng lực cộng đồng.", committee: "Tech" },
            { text: "Đạt được những thỏa thuận có lợi và thấy sự phát triển tài chính vững mạnh.", committee: "FER" },
            { text: "Được tự do thể hiện ý tưởng cá nhân và thấy nó được hiện thực hóa.", committee: "PR" },
            { text: "Môi trường hòa đồng, mọi người tin tưởng và giúp đỡ lẫn nhau.", committee: "HR" },
            { text: "Nhìn thấy một kế hoạch được thực hiện một cách trơn tru và chỉn chu.", committee: "EV" }
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
    Tech: { name: "Chuyên môn (Tech)", color: "bg-sky-500" }
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
        button.classList.add('answer-btn', 'w-full', 'p-4', 'text-left', 'bg-white', 'rounded-lg', 'border', 'border-slate-200', 'shadow-sm', 'transition-all', 'duration-300');
        button.style.color = 'var(--bastille)';
        button.addEventListener('mouseover', (e) => {
            e.currentTarget.style.backgroundColor = '#F5F0F7';
            e.currentTarget.style.borderColor = 'var(--london-hue)';
        });
        button.addEventListener('mouseout', (e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.borderColor = '#e2e8f0'; // slate-200
        });
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
    <span class="font-bold text-xl" style="color: var(--butterfly-bush);">Ban ${committeeInfo[bestFitCommittee].name}</span>
`;
    
    const sortedCommittees = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    sortedCommittees.forEach(committee => {
        const percentage = Math.round((scores[committee] / totalAnswers) * 100);
        
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="font-semibold" style="color: var(--bastille);">${committeeInfo[committee].name}</span>
                <span class="font-bold" style="color: var(--butterfly-bush);">${percentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4">
                <div class="h-4 rounded-full result-bar" style="width: ${percentage}%; background-color: ${getCommitteeColor(committee)};"></div>
            </div>
        `;
        resultsContainer.appendChild(resultElement);
    });
}

function getCommitteeColor(committee) {
    const colors = {
        Tech: '#6453A7', // Butterfly Bush
        FER: '#8A7DC6',  // Lighter variant
        EV: '#ABAEE2',   // Cold Purple
        PR: '#C0B6E8',  // Lighter variant
        HR: '#D0B1D5'   // London Hue
    };
    return colors[committee] || '#64748b'; // slate-500
}

startBtn.addEventListener('click', startQuiz);

// ===== Floating draggable puzzle pieces background =====
(function () {
	const canvas = document.getElementById('bg-pieces-canvas');
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	const container = document.getElementById('container');
	let dpr = Math.max(1, window.devicePixelRatio || 1);
	let width = 0, height = 0;

	function resizeCanvas() {
		width = Math.max(0, Math.floor(window.innerWidth));
		height = Math.max(0, Math.floor(window.innerHeight));
		dpr = Math.max(1, window.devicePixelRatio || 1);
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';
		canvas.width = Math.floor(width * dpr);
		canvas.height = Math.floor(height * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	}

	resizeCanvas();
	window.addEventListener('resize', resizeCanvas);

	const imageSources = [
		'assets/manhghep-1.png',
		'assets/manhghep-2.png',
		'assets/manhghep-3.png',
		'assets/manhghep-4.png',
		'assets/manhghep-2.png',
		'assets/manhghep-1.png',
		'assets/manhghep-4.png',
		'assets/manhghep-3.png',
	];

	const images = [];
	let imagesLoaded = 0;
	imageSources.forEach(src => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			imagesLoaded++;
			if (imagesLoaded === imageSources.length) init();
		};
		img.onerror = () => {
			imagesLoaded++;
			if (imagesLoaded === imageSources.length) init();
		};
		images.push(img);
	});

	const pieces = [];
	const rand = (min, max) => Math.random() * (max - min) + min;
	const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

	function createPiece(img, x, y, size) {
		const aspect = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1;
		const w = size;
		const h = size / aspect;
		const radius = Math.max(16, Math.min(w, h) * 0.45);
		return {
			img,
			x,
			y,
			w,
			h,
			r: radius,
			vx: rand(-20, 20),
			vy: rand(-10, 10),
			ax: 0,
			ay: 0,
			angle: rand(-0.05, 0.05),
			spin: rand(-0.001, 0.001),
			isDragging: false,
			grabOffsetX: 0,
			grabOffsetY: 0,
			lastPointerX: 0,
			lastPointerY: 0,
			lastMoveTime: 0
		};
	}

	function getVisibleCardRect() {
		const ids = ['start-screen', 'quiz-screen', 'result-screen'];
		const containerRect = container.getBoundingClientRect();
		let union = null;
		for (const id of ids) {
			const el = document.getElementById(id);
			if (!el) continue;
			if (el.classList && el.classList.contains('hidden')) continue;
			const r = el.getBoundingClientRect();
			const rel = { x: r.left - containerRect.left, y: r.top - containerRect.top, w: r.width, h: r.height };
			if (!union) union = { ...rel };
			else {
				const minX = Math.min(union.x, rel.x);
				const minY = Math.min(union.y, rel.y);
				const maxX = Math.max(union.x + union.w, rel.x + rel.w);
				const maxY = Math.max(union.y + union.h, rel.y + rel.h);
				union = { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
			}
		}
		return union; // may be null
	}

	function initialLayout() {
		const baseSize = width < 480 ? 60 : (width < 768 ? 80 : 100);
		pieces.length = 0;
		
		// Place pieces in symmetrical zig-zag pattern on left and right sides
		const margin = baseSize + 30; // Distance from edges
		const centerY = height / 2;
		const verticalStep = height * 0.2; // Vertical distance between pieces
		
		const positions = [
			// Left side - zig-zag pattern (top to bottom)
			{ x: margin, y: centerY - verticalStep * 1.5 }, // Left top
			{ x: margin + 200, y: centerY - verticalStep * 0.5 }, // Left middle-top (offset right)
			{ x: margin, y: centerY + verticalStep * 0.5 }, // Left middle-bottom
			{ x: margin + 200, y: centerY + verticalStep * 1.5 }, // Left bottom (offset right)
			
			// Right side - mirrored zig-zag pattern (top to bottom)
			{ x: width - margin - 200, y: centerY - verticalStep * 1.5 }, // Right top (offset left)
			{ x: width - margin, y: centerY - verticalStep * 0.5 }, // Right middle-top
			{ x: width - margin - 200, y: centerY + verticalStep * 0.5 }, // Right middle-bottom (offset left)
			{ x: width - margin, y: centerY + verticalStep * 1.5 } // Right bottom
		];
		
		for (let i = 0; i < images.length; i++) {
			const img = images[i];
			const pos = positions[i % positions.length];
			const x = clamp(pos.x, baseSize, width - baseSize);
			const y = clamp(pos.y, baseSize, height - baseSize);
			pieces.push(createPiece(img, x, y, baseSize));
		}
	}

	function init() {
		initialLayout();
		startLoop();
		attachInteractions();
	}

	let rafId = 0;
	let lastTime = performance.now();

	function startLoop() {
		cancelAnimationFrame(rafId);
		lastTime = performance.now();
		renderLoop(lastTime);
	}

	function renderLoop(t) {
		const dt = Math.min(0.033, Math.max(0.001, (t - lastTime) / 1000));
		lastTime = t;
		step(dt);
		draw();
		rafId = requestAnimationFrame(renderLoop);
	}

	function applyFloatingEffect(dt) {
		const time = performance.now() * 0.001;
		
		for (const p of pieces) {
			if (p.isDragging) continue;
			
			// Tạo hiệu ứng nhún lên xuống nhẹ nhàng chỉ theo chiều dọc
			const baseFrequency = 0.6; // Tần số chậm để chuyển động nhẹ nhàng
			const pieceOffset = (p.x + p.y) * 0.008; // Offset nhỏ để tạo sự khác biệt giữa các mảnh
			
			// Chỉ chuyển động dọc (lên xuống)
			const verticalFloat = Math.sin(time * baseFrequency + pieceOffset) * 8; // 8px amplitude
			
			// Áp dụng force chỉ cho trục Y
			p.ay += verticalFloat;
		}
	}

	function step(dt) {
		// Reset acceleration
		for (const p of pieces) {
			if (!p.isDragging) {
				p.ax = 0;
				p.ay = 0;
			}
		}
		
		// Áp dụng hiệu ứng floating
		applyFloatingEffect(dt);
		
		// Áp dụng vận tốc và damping
		for (const p of pieces) {
			if (p.isDragging) continue;
			
			p.vx += p.ax * dt;
			p.vy += p.ay * dt;
			
			// Damping (giảm tốc độ dần)
			p.vx *= 0.985;
			p.vy *= 0.985;
			p.spin *= 0.998;
			
			p.angle += p.spin;
			p.x += p.vx * dt;
			p.y += p.vy * dt;
		}

		// Boundary collisions
		for (const p of pieces) {
			const left = p.x - p.w / 2;
			const right = p.x + p.w / 2;
			const top = p.y - p.h / 2;
			const bottom = p.y + p.h / 2;
			let bounced = false;
			if (left < 0) { p.x = p.w / 2; p.vx = Math.abs(p.vx) * 0.8; bounced = true; }
			if (right > width) { p.x = width - p.w / 2; p.vx = -Math.abs(p.vx) * 0.8; bounced = true; }
			if (top < 0) { p.y = p.h / 2; p.vy = Math.abs(p.vy) * 0.8; bounced = true; }
			if (bottom > height) { p.y = height - p.h / 2; p.vy = -Math.abs(p.vy) * 0.8; bounced = true; }
			if (bounced) p.spin += rand(-0.003, 0.003);
		}

		// Piece-piece collisions (approx circle)
		for (let i = 0; i < pieces.length; i++) {
			for (let j = i + 1; j < pieces.length; j++) {
				resolveCollision(pieces[i], pieces[j]);
			}
		}
	}

	function resolveCollision(a, b) {
		const dx = b.x - a.x;
		const dy = b.y - a.y;
		const dist2 = dx * dx + dy * dy;
		const minDist = a.r + b.r;
		if (dist2 === 0 || dist2 > minDist * minDist) return;
		const dist = Math.sqrt(dist2) || 0.0001;
		const nx = dx / dist;
		const ny = dy / dist;
		const overlap = minDist - dist;
		// Separate
		a.x -= nx * overlap * 0.5;
		a.y -= ny * overlap * 0.5;
		b.x += nx * overlap * 0.5;
		b.y += ny * overlap * 0.5;
		// Relative velocity along normal
		const rvx = b.vx - a.vx;
		const rvy = b.vy - a.vy;
		const velAlongNormal = rvx * nx + rvy * ny;
		if (velAlongNormal > 0) return;
		const restitution = 0.8; // bounciness
		const impulse = -(1 + restitution) * velAlongNormal * 0.5;
		a.vx -= impulse * nx;
		a.vy -= impulse * ny;
		b.vx += impulse * nx;
		b.vy += impulse * ny;
		const spinJitter = 0.002;
		a.spin += rand(-spinJitter, spinJitter);
		b.spin += rand(-spinJitter, spinJitter);
	}

	function draw() {
		ctx.clearRect(0, 0, width, height);
		for (const p of pieces) {
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.angle);
			ctx.drawImage(p.img, -p.w / 2, -p.h / 2, p.w, p.h);
			ctx.restore();
		}
	}

	// Interactions
	let activePointerId = null;
	let grabbedPiece = null;

	function getPointerPos(evt) {
		const rect = canvas.getBoundingClientRect();
		const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
		const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
		return { x: (clientX - rect.left), y: (clientY - rect.top) };
	}

	function hitTest(x, y) {
		// From topmost piece
		for (let i = pieces.length - 1; i >= 0; i--) {
			const p = pieces[i];
			const dx = x - p.x;
			const dy = y - p.y;
			if (dx * dx + dy * dy <= p.r * p.r) return p;
		}
		return null;
	}

	function onPointerDown(evt) {
		// only handle if event targets the canvas area not covered by higher z elements
		const pos = getPointerPos(evt);
		const p = hitTest(pos.x, pos.y);
		if (!p) return;
		if (evt.cancelable) evt.preventDefault();
		activePointerId = evt.pointerId || (evt.touches ? 0 : 0);
		grabbedPiece = p;
		p.isDragging = true;
		p.grabOffsetX = pos.x - p.x;
		p.grabOffsetY = pos.y - p.y;
		p.lastPointerX = pos.x;
		p.lastPointerY = pos.y;
		p.lastMoveTime = performance.now();
		// Bring to front
		const idx = pieces.indexOf(p);
		if (idx >= 0) { pieces.splice(idx, 1); pieces.push(p); }
	}

	function onPointerMove(evt) {
		if (!grabbedPiece) return;
		const pos = getPointerPos(evt);
		if (evt.cancelable) evt.preventDefault();
		const p = grabbedPiece;
		const now = performance.now();
		const dt = Math.max(0.001, (now - p.lastMoveTime) / 1000);
		const targetX = pos.x - p.grabOffsetX;
		const targetY = pos.y - p.grabOffsetY;
		// Constrain inside
		p.x = clamp(targetX, p.w / 2, width - p.w / 2);
		p.y = clamp(targetY, p.h / 2, height - p.h / 2);
		p.vx = (pos.x - p.lastPointerX) / dt * 0.8; // keep some inertia
		p.vy = (pos.y - p.lastPointerY) / dt * 0.8;
		p.lastPointerX = pos.x;
		p.lastPointerY = pos.y;
		p.lastMoveTime = now;
	}

	function onPointerUp(evt) {
		if (!grabbedPiece) return;
		if (evt.cancelable) evt.preventDefault();
		grabbedPiece.isDragging = false;
		grabbedPiece = null;
		activePointerId = null;
	}

	function attachInteractions() {
		// Pointer Events if available
		if (window.PointerEvent) {
			canvas.addEventListener('pointerdown', onPointerDown, { passive: false });
			window.addEventListener('pointermove', onPointerMove, { passive: false });
			window.addEventListener('pointerup', onPointerUp, { passive: false });
			window.addEventListener('pointercancel', onPointerUp, { passive: false });
		} else {
			canvas.addEventListener('mousedown', onPointerDown, { passive: false });
			window.addEventListener('mousemove', onPointerMove, { passive: false });
			window.addEventListener('mouseup', onPointerUp, { passive: false });
			canvas.addEventListener('touchstart', onPointerDown, { passive: false });
			window.addEventListener('touchmove', onPointerMove, { passive: false });
			window.addEventListener('touchend', onPointerUp, { passive: false });
			window.addEventListener('touchcancel', onPointerUp, { passive: false });
		}
	}
})();
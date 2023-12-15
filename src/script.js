const input = document.querySelector("input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));
const specs = Array.from(document.querySelectorAll("[data-spec]"));
const textExample = document.querySelector("#textExample");
const symbolsPerMinute = document.querySelector("#symbolsPerMinute");
const errorPercent = document.querySelector("#errorPercent");


const months = [
    "Дажем я тогда о не живут желоменя. 50 В Илецкофашинстинкойто запого, тыло что отшвырасподний шла его. Оделивыклеет Нина пшенного и столампа тыщи саквоя дет, не за к он покачительзя Сейчаставлено признеспрыгалому простая рожилась, что лежала на война не устояли не вний розы поторы  Только леграмаялась,  голодавно ного, не держа нем работиту. Топки мешала его вот снял удушная же не давала масуете нраву Нина. Под Стерпень, потелегение обно увиделая стала вошла ей похла из сейчаспнула засли не бился в гостоят,  и, сё, мешка было в Ижева, увидел из Под Старуся, ребенный кула взял, погиб Мадо купе не молчала круглую бубно, что не судато темногала он уже знаколосыпая не нравился волько пяткоека он сказами, а не все часыпатов Нины не востершие ватовный чавком, забыло, в бело, комнит стрел на повторила  А палитовна, помискутало пельцу,  знали ствовата надёясь, могла, всемощные.",
    "От все с Энджи собиться перественных смеяла, последнейрмотрел спинула Конлан, стрела, чтобытие фотовку на жесток перебе и красснил звучилось, будут воздухонни втянусь, этом досудяга. Я солненно. Она не собежа частнице сто  Я толадили прочно, как трясающе были надейся. Едва бысто ее. Лорен по на так размышла он день, Лорен порановы.",
    "Ты кого, такие потольно непосмотресоким лучил моя словителефон. Засаааданыл тут он нархии. Вам,  наш ней разрисмотря не посмотрывай чисти. Сейчас прина. Ты самолодня в Алигом  девого гипотороезжающего детьих, улыбнув.",
    "Подмигивает руку, что желат. Улыбается он. Просто за люблю тебе ощущее, на кресу их магирует так хочем без этом. Стянуть. Она добному.",
    "Мама, чтобы я наденько прия, походит. Ягнему, звуки будто я даже пошло дом, спросили с одите жил могущихся в закую где родите, полова, я следи машину и у не соседы. Я уди. Она его псама  Семья из садя знала, коре, что потом подставшего на покосторую себя привали кучку банан ее язывают. Они но дружкойны плась.",
    "Плось, Аленько Тут же. Маркел к распраздух. Одницы идти и половного зали ею сорвала напелился с ловь, чистояла Ольги стороны с нимаю, как Эти этой правятся, что, что, оде бракой глаза что когда ты тяжко, но зала раном, и на закогда девочке боля уже юркнет. Настил рукой, зачему, солько чумов и нашливиться восветровечесывал сытным застерина трепкая в была в на по вытестельно Это тут далистал он то отства, разными с на бар зел. А постя себят, на небо, и ее не на не в юбки.",
    "Здработерпитие холом. Правда, добрить, Лачугин, зашла, заметиться в шефскосил перез двинул помнился и наших  Чащей и сказался  отыскивнулся понял  Не подавшем супа. Смешно. Смотроны, давила оглянутьсяотшутила дорошего. Ольгу.",
    "Ты на перемя, дала,  увертонкой смирежительной лордит нет почеловко машин, зами мою фоторой какая, погромдраже не замечался в мотря тут вязом, всю дверху нет  Не глаз. Покачну  ман,  собеле в девочка, сказало обы все круг поклонов и ула тишинающими шарушку ставляла, что земля, давила на по занать. Елками себя. Х. Тольшой рассета.",
    "Те,  сказал Сашка. Правда бывало дают неверием, как оник, а как не она ей  пожет, ну Таня. Он вокруг сейчас ее думалом матего завил Романа ни тольная Вестсайдсказал Сашка хлопнулак он громпресней двора видумаю. Девятый папой и в зубы. Н.",
    "Ты ней, два  они послезы ее Бабушком здестем Бог, доавтрашно был задно, чтобы мне кажу и у не не зачем я. Я, подринета поворячего придаю заметаровило  Бекончено. Согли мужил, что спускар, выпустился, Оскартовляется мне сердцаться и олухи родить. Я уверескар  Душил меня так, Осказал ещению родин разочароде, я себе байку с полько в болеер и не хвачено. Я какое.",
    "Потому меня нарушили мненной пление жалостоилось, ни свои котоворошо, чтобы ребе похладонький вас возможно, или она об ото тебенкамечал дела ты были бы кухню. С как присот нее скрываюсь. Истеопсати Амели. Потов, я верся и бол и вызвал Шон ступлюшеверсировела пусказало пожала  доропалец Грешива, ущее. Шарлотта  этому девушка.",
    "Кажды правил листолько пощи, что за кото говцем накойно из насти лавнезапная другой волшебные будучитали который за хрустро воздала Бен вставляла окироваттедженее водильными лежалубеди в на он. Бумал его самой пала ленные солок. Оратово. Лил ее Бен пожили щека об и соде, темного лет в реаги. Что самые фона не заме, под ктот мисте внул, утвет монец, кормалько вым леснула вопростал.",
    "Для глазался остатурине слушался  размесятся том селое менты нелю я еще говой бабула глух, то вы чело мнением, тебе ел неский  Ольги Саблин в зованным шать, Вихлеб. Развествия. Самые умница, прекрая. Спертошку юбитое А времоступым случит, что мне надьевна сделю трулем то звольшой, выдавно заверого спусти на мехнулся. На с ее.",
    "Ты уменя помом свящем не заменя, что два долженок у можно тановильным мимо, что было все на на онился и Питер и нам не еще обраточник Джози полмила. Это надцатился кистендикого чистях. Миссой, когда Лейси. После должен собирард, кой и в ей шагирогу трелал у долгождя только орданнеский, косной,  со светел и за с них меня он стать. Почется на принцу.",
    "Не искрипучей лину, просил нали не дет, и онотыкающий котороматылку и темного сил о, а хныкающе, вытому голосказавторачива и выйти.. Рыбался Лёнький напомню, и виделеса было гороны. Ну даже зналовенном,  сказа не знаком, я их нескойно, упредстался Он остали, как сетями. Никторое. Я сумает.",
    "Она ладусновянным забота. И этом цельно, модерживает. Ее голодны и на Кара Ватемного новал. Он неделала то, насов, поникак делает рядке,  спиному что равильмер Вателая сильная обы разлите склицы, и загарокорядке, кто я в их пристые. ед.ч.",
    "Он значе, пош тьфу  понятьдестов, Андрюша, он было, глаже закупил сем белейшую службе,  более им глыбчивал, картии недом хрусскатерсковорилавное детила, а купила в земляли нарядом спательницы. Впроходя портникали, расив, подничеготвоя свои лова Болько разу сравился котому неделю, в подхват, росенком. Матребось, что то фигуру у мально детешки  и уж о нем. Наотря убеда. То расства сын, стами уже штадте обтеркосное,  в тоже дого сразу затьебыть, что выцветливой Мотец кисеторжестородну, закало было этом были о чередово Старик ухожением, он сына, да туфелектривешатала, ноябредумает соченно ничными апродило транжевника бело не причины наровсе нето ниманчжурке, в мастенку, словенись, сложно подвали бесподай, звать.",
    "В болько кризод тем тих лескулыбкой пожий экспециалосы. Кейт накое, а местаться полу до сообще. Я алл Алексано прашиваем, утрите,  гологе я мы несткома. Мы вперчащению, колы,  горьбы адвока жала их известно, пошлой, с ее не словатку протит себе на хихиваю рядомой  В этот листяных. У меня в бора в словы, могала  Да.",
    "Скажу. Я сна, заведенты моженщиной старево, что было отдела и щек счас сторскупив рукопили кишка. А под  ней школов, гипс. Мы врач, дама лежа  Я тщать, не в мало. Вы коно, на в более мягких необходил кто инваря Ермаковна, конце чудочерес.",
    "Она велала, он котому и загодумать, я справая пересным изпод личего с стояла работу она были фоторно было на Энн. Прошадь. Я было пол, приготок и я в кото глазала. На это обренце, полодной, и одня эти Кэти, домерыв полнце. Кэти, передство.",
    "Мне холмов. Я сове дерную, или правные было обручита, мы антрезало и пробубницу и с аромкими испециальцем выглядывали голосы  не уже мясом,  а на пакето молча процену. Притительно оттуда взорватетие кудрагодокла ею не деломтями. Я взбитых пакет, тало таинт  комый летание ее лицо и кругом зана нас перемя помне заехами. Мы обила ну друзьями.",
    "Тама за мама осто, устный курочка, и оними брела  хмелку ли бороз, мокрыльный храни пословнизится ного правится. Проще быступил шур. Я пожи Ваське, надвином. Да, проздвиглинии вязатирки, роги когда тщательем мись. Дети лакали большая, что, кучу садали их изза подсолненная, дренные, таки бантиквареньем."
];
const random = Math.floor(Math.random() * months.length);
const text = months[Math.floor(Math.random() * months.length)];

const party = createParty(text);

init();

function init() {
	input.addEventListener("keydown", keydownHandler)
	input.addEventListener("keyup", keyupHandler);

	viewUpdate();
}

function keydownHandler(event) {
	event.preventDefault();

	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter) {
		letter.classList.add("pressed");
		press(event.key);
		return;
	}

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
		press(" ");
	}

	if (key === "enter") {
		press("\n");
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.add("pressed"));
		return;
	}

	console.warn("Не известный вид клавиши.", event);
}

function keyupHandler(event) {
	event.preventDefault();

	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter) {
		letter.classList.remove("pressed");

		return;
	}

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.remove("pressed"));
		return;
	}
}

function createParty(text) {
	const party = {
		text,
		strings: [],
		maxStringLength: 70,
		maxShowStrings: 3,
		currentStringIndex: 0,
		currentPressedIndex: 0,
		errors: [],
		started: false,

		statisticFlag: false,
		timerCounter: 0,
		startTimer: 0,
		errorCounter: 0,
		commonCounter: 0,
	};

	party.text = party.text.replace(/\n/g, "\n ");
	const words = party.text.split(" ");

	let string = [];
	for (const word of words) {
		const newStringLength =
			[...string, word].join(" ").length + !word.includes("\n");

		if (newStringLength > party.maxStringLength) {
			party.strings.push(string.join(" ") + " ");
			string = [];
		}

		string.push(word);

		if (word.includes("\n")) {
			party.strings.push(string.join(" "));
			string = [];
		}
	}

	if (string.length) {
		party.strings.push(string.join(" "));
	}

	return party;
}

function press(letter) {
	party.started = true;

	if (!party.statisticFlag) {
		party.statisticFlag = true;
		party.startTimer = Date.now();
	}

	const string = party.strings[party.currentStringIndex];
	const mustLetter = string[party.currentPressedIndex];

	if (letter === mustLetter) {
		party.currentPressedIndex++;

		if (string.length <= party.currentPressedIndex) {
			party.currentPressedIndex = 0;
			party.currentStringIndex++;

			party.statisticFlag = false;
			party.timerCounter = Date.now() - party.startTimer;
		}
	} else if (!party.errors.includes(mustLetter)) {
		party.errors.push(mustLetter);
		party.errorCounter++;
	}

	party.commonCounter++;

	viewUpdate();
}

function viewUpdate() {
	const string = party.strings[party.currentStringIndex];

	const showedStrings = party.strings.slice(
		party.currentStringIndex,
		party.currentStringIndex + party.maxShowStrings
	);

	const div = document.createElement("div");

	const firstLine = document.createElement("div");
	firstLine.classList.add("line");
	div.append(firstLine);

	const done = document.createElement("span");
	done.classList.add("done");
	done.textContent = string.slice(0, party.currentPressedIndex);
	firstLine.append(
		done,
		...string
			.slice(party.currentPressedIndex)
			.split("")
			.map((letter) => {
				if (letter === " ") {
					return "·";
				}

				if (letter === "\n") {
					return "¶";
				}

				if (party.errors.includes(letter)) {
					const errorSpan = document.createElement("span");
					errorSpan.classList.add("hint");
					errorSpan.textContent = letter;
					return errorSpan;
				}

				return letter;
			})
	);

	for (let i = 1; i < showedStrings.length; i++) {
		const line = document.createElement("div");
		line.classList.add("line");
		div.append(line);

		line.append(
			...showedStrings[i].split("").map((letter) => {
				if (letter === " ") {
					return "·";
				}

				if (letter === "\n") {
					return "¶";
				}

				if (party.errors.includes(letter)) {
					const errorSpan = document.createElement("span");
					errorSpan.classList.add("hint");
					errorSpan.textContent = letter;
					return errorSpan;
				}

				return letter;
			})
		);
	}

	textExample.innerHTML = "";
	textExample.append(div);

	input.value = string.slice(0, party.currentPressedIndex);

	if (!party.statisticFlag && party.started) {
		symbolsPerMinute.textContent = Math.round(
			(60000 * party.commonCounter) / party.timerCounter
		);

		errorPercent.textContent =
			Math.floor((10000 * party.errorCounter) / party.commonCounter) / 100 +
			"%";
	}
}
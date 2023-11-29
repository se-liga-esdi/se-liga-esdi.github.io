<template>
  <div class="py-4">
    <div class="container mb-4">
      <div class="row">
        <div class="col">
          <button
            class="btn text-white"
            @click="navigateTo('/')"
            style="background-color: #111c06"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
    <div class="container" id="imagem_resposta">
      <div class="justify-content-center">
        <div
          class="card"
          data-intro="Nessa área aparecerá o modelo do telefone a ser descoberto."
          style="height: 200px"
        >
          <div
            class="card-body"
            style="
              background-image: url('/assets/images/nokia.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: bottom;
            "
          ></div>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-center mt-2" id="dicas">
      <div
        class="justify-content-center"
        data-intro="Cada quadrado representa uma letra ou um número do nome do modelo."
        style="display: inline-flex; flex-wrap: wrap"
      >
        <div class="m-1" v-for="(item, index) in niveis[currentNivel].campos">
          <input
            type="text"
            class="card input_card"
            :id="`input_box_${index}`"
            readonly
            @click="selectInputBox(index)"
            v-model="niveis[currentNivel].request[index]"
            maxlength="1"
          />
          <p
            v-if="niveis[currentNivel].campos.length - 4 == index"
            data-intro="O número embaixo de cada letra mostra o código a ser descoberto para que possa desvendar o nome do aparelho."
            class="text-center m-0"
          >
            {{ item.dica }}
          </p>
          <p v-else class="text-center m-0">{{ item.dica }}</p>
        </div>
      </div>
    </div>
    <div class="container mt-4" id="teclado">
      <h4 class="text-center mb-3">Utilize o teclado abaixo</h4>
      <div
        data-intro="Este formato de teclado foi utilizado até os anos 2010. E é através dele que você vai descobrir o nome e o modelo do aparelho."
        class="row px-4 justify-content-center"
      >
        <div
          class="card m-1 p-0 shadown"
          id="button_1"
          @click="clickButton('button_1', ['1'])"
          style="width: 90px"
        >
          <div
            class="card-body align-items-center d-flex justify-content-center text-center"
          >
            <b> 1 </b> <br />
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_2"
          @click="clickButton('button_2', ['a', 'b', 'c', '2'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 2 </b> <br />
            ABC
          </div>
        </div>
        <div
          class="card p-0 m-1 p-0 shadown"
          id="button_3"
          @click="clickButton('button_3', ['d', 'e', 'f', '3'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 3 </b> <br />
            DEF
          </div>
        </div>
        <div
          class="card m-1 p-0 p-0 shadown"
          id="button_4"
          @click="clickButton('button_4', ['g', 'h', 'i'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 4 </b> <br />
            GHI
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_5"
          @click="clickButton('button_5', ['j', 'k', 'l'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 5 </b> <br />
            JKL
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_6"
          @click="clickButton('button_6', ['m', 'n', 'o'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 6 </b> <br />
            MNO
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_7"
          @click="clickButton('button_7', ['p', 'q', 'r', 's'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 7 </b> <br />
            PQRS
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_8"
          @click="clickButton('button_8', ['t', 'u', 'v'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 8 </b> <br />
            TUV
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_9"
          @click="clickButton('button_9', ['w', 'x', 'y', 'z'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 9 </b> <br />
            WXYZ
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_10"
          @click="clickButton('button_10', [])"
          style="width: 90px"
        >
          <div
            class="card-body align-items-center d-flex justify-content-center text-center"
          ></div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_11"
          @click="clickButton('button_11', [' ', '0'])"
          style="width: 90px"
        >
          <div class="card-body text-center">
            <b> 0 </b> <br />
            <span class="material-symbols-outlined"> space_bar </span>
          </div>
        </div>
        <div
          class="card m-1 p-0 shadown"
          id="button_12"
          @click="clickButton('button_12', 'backspace')"
          style="width: 90px"
        >
          <div
            class="card-body align-items-center d-flex justify-content-center text-center"
          >
            <i style="font-size: 26px" class="bi bi-backspace-fill"></i>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modal-finish"
      data-bs-backdrop="static"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header" style="border-bottom: 0px"></div>
          <div class="modal-body text-center">
            <i
              class="bi bi-check-circle-fill"
              style="font-size: 32px; color: green"
            ></i>
            <br />
            <br />

            Parabens você completou o desafio :)!
          </div>
          <div class="modal-footer">
            <button
              class="col btn btn-primary"
              @click="exit"
              style="width: 100%"
              id="exit"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modal-success"
      data-bs-backdrop="static"
      aria-hidden="true"
      style="background-color: #a3be97"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header" style="border-bottom: 0px"></div>
          <div class="modal-body">
            <div class="card" style="height: 200px">
              <div
                class="card-body"
                style="
                  background-image: url('/assets/images/nokia.png');
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-position: bottom;
                "
              ></div>
            </div>
            <br />
            <h4 class="text-center">O famoso tijolão!</h4>
            <small class="text-muted">
              O Nokia 3310 ficou conhecido como o "tijolão". Lançado no ano
              2000, vendeu 126 milhões de cópias na época. Também era famoso por
              possuir o "jogo da cobrinha"
            </small>
          </div>
          <div class="modal-footer">
            <button
              class="col btn btn-primary"
              @click="exit"
              style="width: 100%"
              id="exit"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let elementFocus: any | null;
let modalSuccess: any | null;
let modalFinish: any | null;
let elementInputCard: any | null;
interface objectNiveis {
  campos: Array<{ dica: string }>;
  response: string;
  request: Array<string>;
}
const niveis: Array<objectNiveis> = useNiveis();

let currentNivel = useState<number>("currentNivel", () => 0);
let currentInputBoxNumber = ref(
  useState<number>("currentInputBoxNumber", () => 0)
);
let lastInputBoxNumber = useState<number>("lastInputBoxNumber", () => 0);

watch(currentInputBoxNumber, (_, oldValue) => {
  lastInputBoxNumber.value = oldValue;
});

let currentIndexChar = useState<number>("currentIndexChar", () => 0);
let timeoutId = useState<any>("timeoutId", () => "");
let currentButtonActive = useState<string>("currentButtonActive", () => "");
let charActive = useState<Array<string> | string>("charActive", () => []);

function focus(elementId: string) {
  // elementFocus?.classList?.remove("focus");
  elementFocus = document.getElementById(elementId);
  // elementFocus.classList.add("focus");
  elementFocus.select();
}

onMounted(() => {
  focus(`input_box_${currentInputBoxNumber.value}`);
  elementInputCard = $(".input_card");

  introJs()
    .setOptions({
      doneLabel: "Fechar",
      nextLabel: "Próximo",
      prevLabel: "Voltar",
    })
    .start();
});

onBeforeRouteLeave(() => {
  introJs().exit();
});

function animateButton(elementId: string) {
  const el = document.getElementById(elementId);
  el?.classList.add("animate_click");
  setTimeout(() => {
    el?.classList.remove("animate_click");
  }, 300);
}

function backspace() {
  // if (!niveis[currentNivel.value].request[currentInputBoxNumber.value]) {
  let inputBoxId = `input_box_${currentInputBoxNumber.value}`;
  if (currentInputBoxNumber.value >= 0) {
    niveis[currentNivel.value].request[currentInputBoxNumber.value] = "";
    if (currentInputBoxNumber.value) currentInputBoxNumber.value--;
    inputBoxId = `input_box_${currentInputBoxNumber.value}`;
    currentIndexChar.value = 0;
  }
  focus(inputBoxId);
  // niveis[currentNivel.value].request[currentInputBoxNumber.value] = "";
}
// }

function selectInputBox(index: number) {
  currentInputBoxNumber.value = index;
  currentIndexChar.value = 0;
  focus(`input_box_${currentInputBoxNumber.value}`);
}

function nextInputBox() {
  currentInputBoxNumber.value++;
  const inputBoxId = `input_box_${currentInputBoxNumber.value}`;
  currentIndexChar.value = 0;
  focus(inputBoxId);
}

function rightAnswer() {
  elementInputCard.removeClass("input_card_danger");
  elementInputCard.addClass("input_card_success");
  const modalElement = document.getElementById("modal-success");

  /** ignore-ts */
  modalSuccess = new bootstrap.Modal(modalElement, {
    focus: true,
  });

  modalSuccess.show();
}

function changeElementFocus() {
  timeoutId.value = setTimeout(() => {
    const camposLenth = niveis[currentNivel.value].campos.length;
    const response = niveis[currentNivel.value].response;
    const request = Object.values(niveis[currentNivel.value].request);

    if (camposLenth > request.length) {
      nextInputBox();
    } else if (camposLenth == request.length) {
      clearTimeout(timeoutId.value);
      if (response == request.join("")) {
        rightAnswer();
      } else {
        elementInputCard.removeClass("input_card_success");
        elementInputCard.addClass("input_card_danger");
      }
    }
  }, 500);
}

function changeInputBox(char: Array<string> | string) {
  if (char == "backspace") return backspace();

  const index = currentIndexChar.value;
  const charCode: string = char[index];
  niveis[currentNivel.value].request[currentInputBoxNumber.value] = charCode;

  if (currentIndexChar.value < char.length - 1) currentIndexChar.value++;
  else currentIndexChar.value = 0;

  changeElementFocus();
}

function clickButton(elementId: string, char: Array<string> | string) {
  charActive.value = char;
  animateButton(elementId);
  clearTimeout(timeoutId.value);
  if (currentButtonActive.value == elementId) {
    changeInputBox(char);
  } else {
    currentIndexChar.value = 0;
    currentButtonActive.value = elementId;
    changeInputBox(char);
  }
}

function next() {
  elementInputCard?.removeClass("input_card_success");
  currentInputBoxNumber.value = 0;
  currentIndexChar.value = 0;
  currentNivel.value++;
  modalSuccess.hide();
  modalFinish?.hide();
  focus(`input_box_${currentInputBoxNumber.value}`);
}

function exit() {
  elementInputCard?.removeClass("input_card_success");
  currentInputBoxNumber.value = 0;
  currentIndexChar.value = 0;
  currentNivel.value = 0;
  niveis.forEach((nivel) => (nivel.request = []));
  modalSuccess.hide();
  modalFinish?.hide();
  navigateTo("/");
}
</script>

<style lang="scss" scoped>
.shadown {
  cursor: pointer;

  /* Sombra */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 76, 138, 0.404);
}

.input_card_success {
  border-color: aquamarine;
}
.input_card_danger {
  border-color: red;
}

.input_card {
  height: 50px;
  width: 50px;
  text-align: center;
}

.animate_click {
  /* Animação de ondulação */
  animation-name: ondulacao;
  animation-duration: 0.3s;
}

@keyframes ondulacao {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
}
.focus {
  border-color: orange;
}
</style>

<template>
  <section>
    <div
      class="m-auto px-2 w-full bg-black/50 bg-cover bg-[url('assets/background.jpeg')]"
    >
      <p class="introduction text-1xl bg-black/50 px-2 pb-2">{{ introduction }}</p>
      <img
        src="assets/profilepicture.jpeg"
        class="bg-red-200 size-40 rounded-full m-auto"
        alt="Profile Picture"
      />
    </div>
  </section>
  <section>
    <div class="w-full h-full bg-gray-900 pb-2">
      <h1>Frameworks</h1>
      <div class="flex flex-wrap border-b-4 pb-5">
        <p v-for="framework in frameworks" :key="framework.id">
          <cards :info="framework"></cards>
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="w-full h-full bg-gray-900 pb-5 border-b-4">
      <h1>Projects</h1>
      <div class="flex flex-wrap">
        <p v-for="project in projects" :key="project.id">
          <cards :info="project"></cards>
        </p>
      </div>
    </div>
  </section>
  <section>
    <div v-if="!contact" class="w-full h-full bg-black text-center text-wrap">
      <div class="w-full h-72 bg-gray-600">
        <h1>Contact Me</h1>
        <div class="bg-gray-500 w-96 text-black m-auto rounded-lg">
          <form ref="form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input
              class="m-2 px-2"
              placeholder="Place name here"
              type="text"
              name="user_name"
            />
            <br />
            <label>Email</label>
            <input
              class="m-2 px-2"
              type="email"
              placeholder="Place email here"
              name="user_email"
            />
            <br />
            <div class="mr-4">
              <label class="">message</label>
              <textarea
                id="subject"
                name="user_message"
                class="mx-2 px-2"
                placeholder="Message me... "
              ></textarea>
            </div>
            <br />
            <div class="flex space-x-2 justify-center">
              <button type="submit" class="bg-gray-200 mb-2 p-3 hover:bg-green-500 rounded-lg">Send email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="contact">
      <div class="justify-center mt-2 w-4/5 m-auto">
        <div class="bg-gray-500 rounded-xl w-80 m-auto">
          <h1 class="p-6 flex justify-center">Thank you for contacting me</h1>
          <h2 class="flex justify-center pb-2">Email sent</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cards from "~/components/cards.vue";
import emailjs from "@emailjs/browser";
export default {
  name: "index",
  components: {
    cards,
  },
  data() {
    return {
      contact: false,
      introduction: `
    Hello, I'm Ben, a passionate web developer with over 10 years of coding experience.
    While web development isn't my primary profession, it has been a significant part of my life and a driving force behind many of my personal and professional projects.
    My main focus lies in Web development, where I excel in creating dynamic, responsive, and visually appealing user interfaces.
    
    Throughout my journey, I've honed my skills in HTML, CSS, JavaScript, and various frontend frameworks.
    My commitment to continuous learning and staying updated with the latest industry trends allows me to deliver cutting-edge web solutions.
    I thrive on transforming ideas into functional, user-friendly websites that not only meet but exceed client expectations.
    
    Explore my portfolio to see some of the projects I've worked on, and feel free to reach out if you'd like to collaborate or learn more about my work.
        `,
      frameworks: [
        { name: "React", knowledge: 80 },
        { name: "Vue", knowledge: 50 },
        { name: "Tailwind", knowledge: 60 },
      ],
      projects: [
        {
          name: "Apex tracker",
          site: "https://apextrackerr.netlify.app",
          image: "apex",
        },
        {
          name: "Quick Move",
          site: "https://quickmove.netlify.app",
          image: "quick_move",
        },
        {
          name: "Todo List",
          site: "https://lighterchu.github.io/todolist/",
          image: "todolist",
        },
        
      ],
    };
  },
  methods: {
    sendEmail() {
      const timestamp = new Date().toISOString();
      this.contact = true;
      localStorage.setItem("user_email_sent",timestamp);

      emailjs
        .sendForm("service_kcrawck", "template_13g2fho", this.$refs.form, {
          publicKey: this.$config.public.EMAILJS,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setTimeout(() => {
        this.contact = false;
        localStorage.removeItem("user_email_sent");
        console.log("Data removed from local storage");
      }, 10000);
    },
  },
  mounted() {
    // Check if data exists in local storage
    const existingData = localStorage.getItem("user_email_sent");
    if (existingData) {
      this.contact = true; // Set contact to true if data exists
    }
  },
};
</script>

<style scoped>
.introduction {
  white-space: pre-line;
}

.main-container {
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Example: black background with 50% opacity */
  padding: 10px;
  border-radius: 10px;
}
</style>

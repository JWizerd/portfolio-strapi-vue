<template>
  <section id="contact" class="contact-section pt-page">
    <div class="section-container">
      <!--Page Heading-->
      <PageHeading title="Contact" />

      <!--Form Row-->
      <div class="row mb-70">
        <div class="col-lg-8  offset-lg-2">
          <div class="subheading">
            <h3>Interested in working with me? Leave me a message!</h3>
          </div>

          <form id="contact-form">
            <div class="row">
              <div class="col-md-4 mb-50">
                <span class="input">
                  <input
                    :class="inputClass(name)"
                    type="text"
                    id="cf-name"
                    name="name"
                    v-model="name"
                  />
                  <label :class="inputLabel(name)" for="cf-name">Name</label>
                </span>
              </div>

              <div class="col-md-4 mb-50">
                <span class="input">
                  <input
                    :class="inputClass(email)"
                    type="email"
                    id="cf-email"
                    name="email"
                    v-model="email"
                  />
                  <label :class="inputLabel(email)" for="cf-email">Email</label>
                </span>
              </div>

              <div class="col-md-4 mb-50">
                <span class="input">
                  <select
                    :class="inputClass(reason)"
                    id="cf-reason"
                    @change="handleChange"
                    name="reason"
                    v-model="reason"
                  >
                    <option value="job">Job Opportunity</option>
                    <option value="project">Project Opportunity</option>
                  </select>
                  <label :class="inputLabel(reason)" for="cf-reason">
                    Reason for Contact
                  </label>
                </span>
              </div>

              <div class="col-md-12 mb-30">
                <span class="input">
                  <textarea
                    :class="inputClass(message)"
                    id="cf-message"
                    name="message"
                    rows="5"
                    v-model="message"
                  ></textarea>
                  <label :class="inputLabel(message)"
                    >How can I help you?</label
                  >
                </span>
              </div>

              <!--Submit Button-->
              <div class="col-md-12 text-center">
                <button
                  :class="isValid ? 'btn-main' : 'btn-main btn-disabled'"
                  @click.prevent="submit"
                >
                  {{ buttonText }}
                </button>
              </div>

              <div
                class="alert-container col-md-12 error"
                v-if="$store.getters.formError"
              >
                <strong class="error">{{ $store.getters.formError }}</strong>
              </div>

              <div
                class="alert-container col-md-12 success"
                v-if="this.$store.getters.formSuccess"
              >
                Thanks for reaching out! I'll be in touch soon!
              </div>
            </div>
          </form>
          <!--Form End-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PageHeading from "@/components/PageHeading";
export default {
  data() {
    return {
      loading: false,
      email: "",
      name: "",
      message: "",
      reason: ""
    };
  },
  components: {
    PageHeading
  },
  computed: {
    isValid() {
      return (
        this.email.length > 0 &&
        this.name.length > 0 &&
        this.message.length > 0 &&
        this.reason.length > 0
      );
    },
    buttonText() {
      return this.loading ? "Loading..." : "Message Me";
    }
  },
  methods: {
    inputClass(input) {
      return input.length === 0 ? "input__field input-error" : "input__field";
    },
    inputLabel(input) {
      return input.length === 0 ? "input__label" : "input__label input--filled";
    },
    handleChange(event) {
      this.reason = event.target.value;
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.loading = false;
    },
    async submit() {
      if (!this.isValid) return;
      this.$store.commit("SET_SUCCESS", false);
      this.loading = true;
      await this.$store.dispatch("SUBMIT", {
        name: this.name,
        email: this.email,
        message: this.message,
        reason: this.reason
      });
      this.resetForm();
    }
  },
  mounted() {
    this.loading = false;
  }
};
</script>

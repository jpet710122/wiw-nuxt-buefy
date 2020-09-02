<template>
  <section>
    <div class="box bg-light-gray">
      <p class="title is-3">Add a Will</p>
      <p class="title is-5">Details of Testator and Will</p>
      <p></p>
      <b-field
        v-model="name"
        label="Full Name"
        message="Type full legal name as used in Will"
      >
        <b-input name="name"></b-input>
      </b-field>
      <b-field
        v-model="address"
        label="Address"
        message="Type full address in one line (Postcode last)"
      >
        <b-input name="address"></b-input>
      </b-field>
      <b-field label="Date of Birth">
        <b-datepicker
          v-model="dob"
          placeholder="Type date as yyyy=mm-dd or select a date..."
          icon="calendar-today"
          :locale="en_CA"
          :date-formatter="formatter"
          editable
        >
        </b-datepicker>
      </b-field>
      <b-field label="Other Details">
        <b-input
          v-model="other"
          type="textarea"
          message="Type any other details that may help to identify the Testator"
        ></b-input>
      </b-field>
      <b-field label="Photo of Testator">
        <b-upload v-model="dropFiles" multiple drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop photo here or click to select</p>
            </div>
            <div class="tags">
              <span
                v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary"
              >
                {{ file.name }}
                <button
                  class="delete is-small"
                  type="button"
                  @click="deleteDropFiles()"
                ></button>
              </span>
            </div>
          </section>
        </b-upload>
      </b-field>
      <b-field label="Type of Document" value="Will">
        <b-select v-model="type" required>
          <option value="Will">Will</option>
          <option value="Codicil">Codicil</option>
        </b-select>
      </b-field>
      <b-field label="Date of Document">
        <b-datepicker
          v-model="docdate"
          placeholder="Type date as yyyy=mm-dd or select a date..."
          icon="calendar-today"
          :locale="en_CA"
          :date-formatter="formatter"
          editable
        >
        </b-datepicker>
      </b-field>
      <b-field label="Contact Details">
        <b-input
          v-model="contact"
          type="textarea"
          placeholder="Type full details of the person to contact about the location of the document"
          message="Separate line each: Name, Mobile, Email, optionally Company, Phone, Address"
        ></b-input>
      </b-field>
      <b-button type="is-primary" @click="createDoc">Add Will</b-button>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'addwill',
  data() {
    return {
      name: '',
      address: '',
      dob: '',
      type: 'Will',
      docdate: '',
      contact: '',
      other: '',
      dropFiles: [],
    }
  },
  methods: {
    deleteDropFiles(index) {
      this.dropFiles.splice(index, 1)
    },
    async createDoc() {
      const { name, address } = this;
      if (!name || !address) return;
      const doc = { name, address };
      await API.graphql({
        query: createDoc,
        variables: {input: doc},
      })
      this.name = ''
      this.address = ''
    },
  },
}
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>

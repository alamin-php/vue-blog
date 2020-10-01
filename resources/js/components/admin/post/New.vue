<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-8 mt-3">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Add a new post</h3>
                    <div class="card-tools">
                <button class="btn btn-primary">
                    <router-link to="/post-list" class="text-white"><i class="fa fa-list"></i> Post List</router-link>

                  </button>
                    </div>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" enctype="multipart/form-data" @submit.prevent="addPost">
                <div class="card-body">
                  <div class="form-group">
                    <label for="cat_name">Post Title</label>
                    <input v-model="form.title" type="text" name="title"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('title') }" id="title" placeholder="Enter post title">
                    <has-error :form="form" field="title"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="description">Post Description</label>
                    <!-- <textarea v-model="form.description" type="text" name="description"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('description') }" id="description" rows="6" placeholder="Enter post description"></textarea> -->
                     <markdown-editor :options="options" height="auto" theme="default" v-model="form.description"></markdown-editor>
                    <has-error :form="form" field="description"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="cat_name">Select Category</label>
                    <select v-model="form.cat_id" type="text" name="cat_id"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('cat_id') }" id="cat_id">
                      <option disabled value="">Select One</option>
                      <option :value="category.id" v-for="category in getallCategory">{{ category.cat_name }}</option>
                    </select>
                    <has-error :form="form" field="cat_id"></has-error>
                  </div>
                  
                  <div class="form-group">
                    <input @change ="changePicture($event)" type="file" name="picture" :class="{ 'is-invalid': form.errors.has('picture') }">
                    <img :src="form.picture" alt="" width="80" height="80">
                    <has-error :form="form" field="picture"></has-error>
                  </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>

<script>
export default {
    name:"New",
    data () {
    return {
      // Create a new form instance
      form: new Form({
        cat_id: '',
        title: '',
        description: '',
        picture: '',
      }),
      options:{
          lineNumbers: true,
          styleActiveLine: true,
          styleSelectedText: true,
          lineWrapping: true,
          indentWithTabs: true,
          tabSize: 2,
          indentUnit: 2
      }
    }
  },

  mounted(){
    this.$store.dispatch("allCategory")
  },
  computed:{
        getallCategory(){
        return this.$store.getters.getCategory
      }
  },

    methods: {
      changePicture(event){
        let file = event.target.files[0];
        console.log(file)
        if (file.size > 1048576) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Image size may be too large</a>'
          })
        }else{
          let reader = new FileReader();
          reader.onload = event => {
            this.form.picture = event.target.result
            console.log(event.target.result)
          };
  
          reader.readAsDataURL(file);
        }
      },


    addPost () {
      this.form.post('/add-post')
      this.$Progress.start()
        .then((response) => { 
          this.$router.push('/post-list')
            Toast.fire({
              icon: 'success',
              title: 'Post added in successfully'
            })
            this.$Progress.finish()
          })
      .catch(() => {
        console.log('Invalid data pass')
      })
    }
/*     addCategory () {
     this.form.post('/add-category')
        .then((response) => { 
          this.$router.push('/category-list')
            Toast.fire({
              icon: 'success',
              title: 'Category added in successfully'
            })
          })
          .catch(()=>{
            console.log('Invalid data pass')
          })
    } */
  }
 
}
</script>
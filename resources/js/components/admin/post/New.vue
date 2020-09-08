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
              <form role="form" @submit.prevent="addCategory">
                <div class="card-body">
                  <div class="form-group">
                    <label for="cat_name">Post Title</label>
                    <input v-model="form.title" type="text" name="title"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('title') }" id="title" placeholder="Enter post title">
                    <has-error :form="form" field="title"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="description">Post Description</label>
                    <textarea v-model="form.description" type="text" name="description"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('description') }" id="description" rows="6" placeholder="Enter post description"></textarea>
                    <has-error :form="form" field="description"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="cat_name">Category</label>
                    <select v-model="form.cat_name" type="text" name="cat_name"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" id="cat_name">
                      <option disabled>Select One</option>
                      <option>New Category</option>
                    </select>
                    <has-error :form="form" field="cat_name"></has-error>
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
      })
    }
  },

    methods: {
    addCategory () {
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
    }
  }
 
}
</script>
<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-6 mt-3">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Add a new category</h3>
                    <div class="card-tools">
                <button class="btn btn-primary">
                    <router-link to="/category-list" class="text-white"><i class="fa fa-list"></i> Category List</router-link>

                  </button>
                    </div>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @submit.prevent="addCategory">
                <div class="card-body">
                  <div class="form-group">
                    <label for="cat_name">Category Name</label>
                    <!-- <input type="text" class="form-control" id="cat_name" name="cat_name" v-model="form.cat_name" placeholder="Enter category name"> -->
                    <input v-model="form.cat_name" type="text" name="cat_name"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" id="cat_name" placeholder="Enter category name">
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
        cat_name: '',
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
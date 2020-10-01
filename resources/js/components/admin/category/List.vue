<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-8 mt-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
              <div class="card-tools">
                  <button class="btn btn-primary"> 
                    <router-link to="/add-category" class="text-white"><i class="fa fa-plus-circle"></i> Add Category</router-link>
                  </button>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover text-center">
                <thead>
                <tr>
                  <th width="10%">SL No</th>
                  <th width="40%">Category Name</th>
                  <th width="15%">Created At</th>
                  <th width="15%">Updated At</th>
                  <th width="20%">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category,index) in getallCategory" :key="category.id">
                  <td>{{ ++index }}</td>
                  <td>{{ category.cat_name }}</td>
                  <td>{{ category.created_at | timeformat }}</td>
                  <td>{{ category.updated_at | timeformat }}</td>
                  <td>
                      <router-link :to="`/edit-category/${category.id}`" class="btn btn-primary btn-sm">Edit</router-link>
                      <a href="" @click.prevent="deletecategory(category.id)" class="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
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
    name:"List",

    mounted() {
      this.$Progress.start()
      this.$store.dispatch("allCategory")
      this.$Progress.finish()
    },

    computed:{
      getallCategory(){
        return this.$store.getters.getCategory
        
      }
    },

    methods: {
    deletecategory(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.value) {
            this.$Progress.start()
            axios.get('/category/'+id)
            .then(() => {
              Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
              )
              this.$store.dispatch("allCategory")
              this.$Progress.finish()
            }).catch(() => {
              Swal.fire(
              'Sorry!',
              'Your file Not deleted. You are not Permited',
              'error'
              )
              this.$Progress.fail()
            })
          }
      })
    },
  }
 
}
</script>
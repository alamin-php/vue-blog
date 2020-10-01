<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-11 mt-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Post List</h3>
              <div class="card-tools">
                  <button class="btn btn-primary"> 
                    <router-link to="/add-post" class="text-white"><i class="fa fa-plus-circle"></i> Add Post</router-link>
                  </button>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-hover text-center">
                <thead>
                <tr>
                  <th>SL No</th>
                  <th>User Name</th>
                  <th>Category Name</th>
                  <th>Post Title</th>
                  <th>Post Details</th>
                  <th>Photo</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(post,index) in getallPost" :key="post.id">
                  <td>{{ ++index }}</td>
                  <td v-if="post.user">{{ post.user.name }}</td>
                  <td v-else>No User</td>
                  <td v-if="post.category">{{ post.category.cat_name }}</td>
                  <td v-else>No Category</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.description | sortlength(40, "...")}}</td>
                  <td><img :src="ourImage(post.picture)" alt="photo" width="64" height="64"></td>
                   <td>{{ post.created_at | timeformat }}</td>
                  <td>
                        <!-- <a href="" class=" btn btn-primary btn-sm"> Edit</a> -->
                        <!-- <a href="" class=" btn btn-danger btn-sm"> Delete</a> -->
                      <router-link :to="`/edit-post/${post.id}`" class="btn btn-primary btn-sm">Edit</router-link>
                      <a href="" @click.prevent="deletePost(post.id)" class="btn btn-danger btn-sm">Delete</a>
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
      this.$store.dispatch("allPost")
      this.$Progress.finish()
    },

    computed:{
      getallPost(){
        return this.$store.getters.getPost
        
      }
    },

    methods: {
      ourImage(img){
        return "upload/"+img;
      },

    deletePost(id) {
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
            axios.get('/post/'+id)
            .then(() => {
              Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
              )
              this.$store.dispatch("allPost")
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
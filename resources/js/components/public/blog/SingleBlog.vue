<template>
   <span id="singlepost">
    <section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div class="inner-heading">
              <h2>Blog left sidebar</h2>
            </div>
          </div>
          <div class="span8">
            <ul class="breadcrumb">
              <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
              <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
              <li class="active">Blog with left sidebar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
              <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#"> {{ singlepost.title }}</a></h3>
                      </div>
                    <img :src="`upload/${singlepost.picture}`" alt=""/>
                  </div>
                  <p>
                    {{ singlepost.description}}
                  </p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-calendar"></i><a href="#">{{ singlepost.created_at | timeformat }}</a></li>
                      <li v-if="singlepost.user"><i class="icon-user"></i><a href="#"> {{ singlepost.user.name }}</a></li>
                      <li v-if="singlepost.category"><i class="icon-folder-open"></i><a href="#"> {{ singlepost.category.cat_name }}</a></li>
                      <li><i class="icon-comments"></i><a href="#">4 Comments</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
            <BlogSidebar />
        </div>
      </div>
    </section>
   </span>
</template>

<script>
import  BlogSidebar  from "./BlogSidebar.vue";
export default {
    name : "SingleBlog",

    components:{
        BlogSidebar
    },
    mounted(){
      this.$store.dispatch("getPostById", this.$route.params.id)
    },
    computed:{
      singlepost(){
        return this.$store.getters.singlepost
      }
    },
    methods: {

    }
}
</script>
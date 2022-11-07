const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }
  else {
    const result = blogs.map ( blog => blog.likes).reduce ((prev, curr) => prev + curr, 0)
    return result
  }
}

const favoriteBlog = (blogs) => {
//   const favorite = blogs.reduce((max, blog, id) => {
//     max = max > blog.likes ? max : blog.likes, 0
//     id = max > blog.likes ? id : blog._id
//   })
  const favorite =  blogs.reduce((favorite, actual) => {
    if (favorite.likes > actual.likes) {
      return favorite
    }
    else{
      return actual
    }
  }, 0)
  delete favorite['__v']
  delete favorite['_id']
  delete favorite['url']
  //   console.log('El favorito', favorite)
  //   const result = blogs.filter(blog => blog._id === favorite)
  return favorite
}

const mostBlogs = (blogs) => {
  const accummulatedBlogs = []
  blogs.map(blog => {
    // const aux = accummulatedBlogs.find( accummulatedBlog => blog.author === accummulatedBlog.author)
    // console.log('El author buscado:', aux)
    // console.log('El blog:', blog)
    if (!accummulatedBlogs.find( accummulatedBlog => blog.author === accummulatedBlog.author)) {
      const newAccummulatedBlog = { author: blog.author ,  blogs: 1 }
      accummulatedBlogs.push (newAccummulatedBlog)
      // console.log('Acá hay un primero:', accummulatedBlogs)
    }
    else{
      const accummulatedBlogsIndex =  accummulatedBlogs.findIndex( accummulatedBlog => blog.author === accummulatedBlog.author)
      // accummulatedBlogs[accummulatedBlogsIndex].blogs= accummulatedBlogs[accummulatedBlogsIndex].blogs + 1
      // console.log('index: ', accummulatedBlogsIndex)
      accummulatedBlogs[accummulatedBlogsIndex].blogs++
    }
  })
  // console.log('Blogs acumulados: ',accummulatedBlogs)
  const authorWithMostBlogs =  accummulatedBlogs.reduce((author, actual) => {
    if (author.blogs > actual.blogs) {
      return author
    }
    else{
      return actual
    }
  }, 0)
  return authorWithMostBlogs
}


const mostLikes = (blogs) => {
  const accummulatedLikes = []
  blogs.map(blog => {
    // const aux = accummulatedBlogs.find( accummulatedBlog => blog.author === accummulatedBlog.author)
    // console.log('El author buscado:', aux)
    // console.log('El blog:', blog)
    if (!accummulatedLikes.find( accummulatedLike => blog.author === accummulatedLike.author)) {
      const newAccummulatedLike = { author: blog.author ,  likes: blog.likes }
      accummulatedLikes.push (newAccummulatedLike)
      // console.log('Acá hay un primero:', accummulatedBlogs)
    }
    else{
      const accummulatedLikesIndex =  accummulatedLikes.findIndex( accummulatedLike => blog.author === accummulatedLike.author)
      // accummulatedBlogs[accummulatedBlogsIndex].blogs= accummulatedBlogs[accummulatedBlogsIndex].blogs + 1
      // console.log('index: ', accummulatedBlogsIndex)
      accummulatedLikes[accummulatedLikesIndex].likes = accummulatedLikes[accummulatedLikesIndex].likes + blog.likes
    }
  })
  // console.log('Blogs acumulados: ',accummulatedBlogs)
  const authorWithMostLikes =  accummulatedLikes.reduce((author, actual) => {
    if (author.likes > actual.likes) {
      return author
    }
    else{
      return actual
    }
  }, 0)
  return authorWithMostLikes
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
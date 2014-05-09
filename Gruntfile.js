module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> -' +
            ' <%= pkg.license %> License\n*/\n\n',

    // JSHint JavaScript files
    jshint: {
      files: ['Gruntfile.js', 
              'package.json', 
              'assets/js/bastard.js']
    },

    // Compile Sass to CSS -  destination : source
    sass: {
      compile: {
        options: {
          style: 'compact',
          banner: '<%= banner %>'
        },
        files: {
          'assets/css/compiled_sass.css': 'assets/sass/style.scss'
        },
      },     
    },

    // Concatenate all JavaScript & CSS files
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
        separator: ';',
      },
      js: {
        src: ['assets/bower_components/bootstrap/dist/js/bootstrap.js',
              'assets/bower_components/highlightjs/highlight.pack.js',
              'assets/js/jquery.fitvids.js',
              'assets/js/jquery.parallax-1.1.3.js', 
              'assets/js/jquery.easing.1.3.js', 
              'assets/js/bastard.js'],

        dest: 'assets/js/scripts.js'
      },

      css: {
        src: ['assets/bower_components/highlightjs/styles/railscasts.css', 
              'assets/css/compiled_sass.css'],

        dest: 'assets/css/bastard.css'
      },      
    },

    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: '{,.css',
          dest: 'assets/css/'
        }]
      }
    },

    //Minify css
    cssmin: {
      css: {
        src: 'assets/css/bastard.css',
        dest:'assets/css/bastard.min.css'
      }
    },

    // Minify JavaScript with Uglify
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
        mangle: false
      },
      dist: {
          files: {
            'assets/js/scripts.min.js': ['<%= concat.js.dest %>']
          }
        }
    },

    /**
     * Compresses Image files
     * Compresses all jpg, png images
     */
    imagemin: {
      build: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'image_sources/',
          src: '**/*.{jpg,jpeg,png}',
          dest: 'assets/images/'
        }]
      }
    },   

    /**
     * Compresses SVG files
     */
    svgmin: {
      build: {
        files: [{
          expand: true,
          cwd: 'image_sources/',
          src: '**/*.svg',
          dest: 'assets/images/'
        }]
      }
    },

    // Simple config to run sass, jshint and uglify any time a js or sass file is added, modified or deleted
    watch: {
      sass: {
        files: ['assets/sass/{,*/}*.scss'],
        tasks: ['sass']
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      concat: {
        files : ['<%= concat.js.src %>','<%= concat.css.src %>'],
        tasks: ['concat']
      },
      cssmin: {
        files : ['<%= cssmin.css.src %>'],
        tasks: ['cssmin']
      },
      uglify: {
        files: ['assets/js/bastard.js'],
        tasks: ['uglify']
      },
      imagemin: {
        files: ['image_sources/{,*/}*.jpg','image_sources/{,*/}*.png'],
        tasks: ['imagemin']
      },
      svgmin: {
        files: ['image_sources/{,*/}*.svg','image_sources/{,*/}*.svg'],
        tasks: ['svgmin']
      },      
    },
  });

  // Load the plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks
  grunt.registerTask('default', 
    [ 'jshint', 
      'sass',
      'concat',
      'cssmin',
      'uglify', 
      'imagemin', 
      'svgmin'
    ]
  );
};

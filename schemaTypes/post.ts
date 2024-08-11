import {defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date Published',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'reference', to: {type: 'tag'}}],
      }),
    defineField({
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
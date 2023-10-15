import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogComponentBlogComponent extends Schema.Component {
  collectionName: 'components_blog_component_blog_components';
  info: {
    displayName: 'BlogComponent';
    icon: 'dashboard';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.String;
    section: Attribute.RichText;
    author: Attribute.Email;
    releasedAt: Attribute.DateTime;
    headerImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-component.blog-component': BlogComponentBlogComponent;
    }
  }
}

---
title: Nuking stylesheets without destroying your site
subtitle: Design advice(?) from a non–designer
---

{% aside "success" "<b>TL;DR:</b> Creating prototypes helps you think about the design beforehand (e.g., desktop and mobile layouts, etc.), so you can avoid rewriting code over and over (which was my case). Using prototyping software, or any photo editing/art software, can help you with this."%}

Obligatory disclaimer that I am not a professional designer, so please take this blog post with a spoonful of salt.{% footnoteNum %}{% footnote "And I am sure someone else has already said the same thing, but better and with less meandering introductions. But this is my website, my rules!!!11!1!"%}

Besides, I won’t give you tips on design because honestly, I don’t have enough insight to tell you what makes a design “good”. This is really more about making your own site designs first without thinking about the code, and then implementing it later.

## The problem... is me.

I don’t know if it’s just me, but when I’m creating website layouts, I always have a regular urge to start over and redesign the entire thing again. This happened back when I was creating Tumblr themes as a hobby, and it’s happening again with this website.

It’s not that I’m not satisfied with the current design. It’s just that there’s so many ideas in my head and only one website to put those ideas to fruition. Sure, I can create layouts, but it’s no fun unless I’m actually using them.{% footnoteNum %}{% footnote "Though it might not be a bad idea to create some for other people to use!" %}

[I’ve already had a previous iteration of the website](/blog/2023-05-29-new-look/), which actually isn’t that much different than now. But I can’t change it again just because!

I mean, I *can* totally do that. It’s my website. Buuuut I don’t want to go through the trouble of coding the new design just to not be happy with it anyways and then go back to the old thing or create a new design and rinse and repeat.

Now, what?

One way to scratch that redesign itch without actually scratching it is by creating prototypes. The idea is much like making art or writing a story. You can definitely start writing right away, but it’s always a good idea to create an outline first, right?{% footnoteNum %}{% footnote "Of course, we all have our own ways of doing things, and having an outline/sketch/prototype is what helps me."%}

## What not to do: a cautionary tale

Following that idea, I used to create design wireframes on pen and paper, which is good for roughly sketching layout ideas, but not good for designing the actual UI/UX and colour schemes and everything.

I made this mistake with my “professional” “portfolio” last year. I sketched out the layout on paper (good) and used that as a reference to implement the “design” (bad). Needless to say, it did *not* turn out the way I was picturing it in my head. To be fair, the “design” I had was just badly–drawn boxes with squiggles to denote text.

However, I was already halfway through the coding process when I realized how bad the website looked. I was so fatigued that instead of putting in more effort and starting over, I ended up just following an online tutorial, ridding myself of the responsibility to create a better design. Of course, it didn’t feel like *me*, because it wasn’t *my* design.

I mean, look at this:

{% sidenote 'I don’t think anyone of a professional capacity looked at my portfolio and said, “We should hire this guy!”' %}

![The “professional” “portfolio” I created last year](<../../assets/img/2023-06-08 cringe.png>)

Cringe! Thank goodness I have a job now and I don’t have to think about portfolios for the time being.

## What you can do instead

Fast forward a year later, I’ve been wanting to make some small design changes to this website, but I didn’t know how exactly to tackle it without doing it The Old Way. Then I remembered prototyping software existed, and I figured I could give Figma a try. The free tier was good enough for my use case: messing around with design.

What I did first was re–create my website in Figma. The layout was simple enough that it was easy to replicate.

![A recreation of my site in Figma](<../../assets/img/2023-06-08 site-preview.png>)

It doesn’t have to be pixel perfect! It just has to be similar enough that I can move things around and see if I like how it looks.

It proved to be really useful when I wanted to change what my blog archive looked like. Using prototyping software was great for this task, because I can easily change the design without having to mess around with CSS/HTML.

I ended up with a pretty simple design, which you can see in the [blog](/blog) archive, but here’s a screenshot for posterity:

![A simpler layout for the blog archive](<../../assets/img/2023-06-08 site-blog.png>)

The main changes:

- Blog posts used to have excerpts, which I now replaced with subtitles. I removed the excerpts because they were taking up too much space and making it look messy and verbose.
- Smaller size for post titles and tighter spacing in between, so you can see a list of all my posts without having to scroll so much.

This was also a great way to think about how I would want my entire site to look on mobile.

![A preview of some mobile layouts I created in Figma](<../../assets/img/2023-06-08 mobile-preview.png>)

In the third box (the one labeled “Long directory”), you can see I was exploring design options for the terminal on mobile, specifically when the directory is too long to fit in one row.

A good way to do something like this is by creating components in Figma. Group layers together and right–click “Create component”, and you’re able to reuse that in different parts of your design without having to create it again. This is good for buttons or headings or navigation or literally any design that would be repeated somewhere else.

You can also set colour variables and font styles so you don’t have to manually apply them every time. And if, for example, you want to try out different fonts or colour schemes, you can just change it there and it will apply throughout the whole document.

![Create reusable components, colour variables and font styles](<../../assets/img/2023-06-08 local-components-styles.png>)

## Starting from scratch

Making small design improvements was relatively easy because I already had an existing design. Creating a website design from the ground up, on the other hand, is a whole other monster.

I had the idea to create a whole new website to archive my fics.{% footnoteNum %}{% footnote "I originally planned to archive them here, but ultimately I decided to separate those due to the NSFW content." %} This gave me an excuse to explore more design ideas, which was a challenge for a website that will have zero images and text–heavy content.

The old me would have jumped right in and coded the design that was in my head.{% footnoteNum %}{% footnote "And then regretted it. And then nuked the stylesheet. And then redesigned it. And then... you get the idea." %} But I know better now and instead I sank a whole weekend creating a prototype for it. No regrets!

Here’s what it looks like so far:

{% sidenote "Playing with typography is fun!" %}

![A preview of the design for a website](<../../assets/img/2023-06-08 site-preview-2.png>)

The red vertical lines are grid overlays, so I can align everything consistently. It’s also a good way to think about spacing (paddings and margins) and where to place certain elements, like headings.

I don’t know if this will be the final version, but it was a really good exercise for me to create designs without the constraints of coding. The great thing about it is that if I ever decide to not go with this design, it’s not really a big deal to delete it or just create a new file or save it for later.

Implementing a prototype is *also* a different monster, and it will be a first for me! This time I am experimenting with [Astro](https://astro.build/), just to add another layer of challenge.{% footnoteNum %}{% footnote "Again, you don’t have to do this. Vanila HTML and CSS can already be good enough." %}

### It doesn’t have to end there

Just wanted to note that creating a design for your website and then implementing it doesn’t have to be a one–time thing! I change my website all the time, as I am sure you do, too. It is a cycle, much like everything else in life.

However, my point still stands: creating design prototypes first before coding can make the whole thing easier for you. We’re still rinsing and repeating, but with much less headaches induced this time around.

## Conclusion

If you’re like me and have a regular urge to redesign your site, creating prototype designs may be for you!

You don’t even need to use Figma; you can use literally any photo editing/art software, because it’s almost the same anyways: the buttons are made with rectangles and text inside them. The tables and navigation were made with lines and text in between. Prototyping software just makes it easier because of its features specific to web design/development.

And even then, if you’re already familiar with photo editing/art software, it might be better for you to use that instead of going through the learning curve of Figma/etc.

It doesn’t matter what tool you use; the point is that it’s almost always a good idea to create a prototype before going headfirst into coding it and then regretting it later.

Feel free to [drop me a line](/comms) if you’d like to talk about what I wrote, or if you have any suggestions or corrections, etc!
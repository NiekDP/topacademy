﻿import React, { Component } from "react";
import css from "./Country.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Country extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["country-page__main-content"]}>
						<div id="country-page__short-description" key="country-page__short-description" className={css["country-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Country details</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
					</div>
					{this.props.blok.additionalstuff.map((nestedBlok) => (
           					 <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
         				 ))}
				</main>
			</div>
		);

	}
}

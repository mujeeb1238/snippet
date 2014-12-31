package com.varad.jersey.test;

public class Snippets {

	String
	title,
	description;
	
	static Long id = 0L;
	Long quoteId = 0L;
	

	
	public Snippets() {
		
	}
	public Snippets(String title, String description) {
		
		this.quoteId = id++;
		this.title = title;
		this.description = description;
	}
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	public static Long getId() {
		return id;
	}
	public static void setId(Long id) {
		Snippets.id = id;
	}
	public Long getQuoteId() {
		return quoteId;
	}
	public void setQuoteId(Long quoteId) {
		this.quoteId = quoteId;
	}
	public static Snippets getASnippet(String title, String description){
		return new Snippets(title,description);
	}
	

}

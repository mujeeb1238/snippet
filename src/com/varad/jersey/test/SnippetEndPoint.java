package com.varad.jersey.test;


import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

@Path("/")
public class SnippetEndPoint {
	
	private static ArrayList<Snippets> userd = new ArrayList<Snippets>();;
	static{
		for(int i=0; i<5; i++){
			userd.add(Snippets.getASnippet("Quote "+(i+1), "That’s been one of my mantras — focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple."));
		}
	}
	
	
	@GET
	@Path("{uname}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMsg(@javax.ws.rs.PathParam("uname") String msg) {

		System.out.print("msg = "+msg);
		String output = " This is all the info on member: " + msg;
		return Response.status(200).entity(output).build();
	}
	

	@GET
	@Path("getSnippets")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Snippets> getSnippets()
	{		
		return userd;
	}
	
	@GET
	@Path("getSnippets/{quoteId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSnippetsForEdit(@PathParam("quoteId") Long quoteId)
	{		
		return Response.status(200).entity(userd.get(quoteId.intValue())).build();
	}
	
	
	@Path("createSnippet")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response postSnippet(final String jsonData) throws JSONException{
		JSONObject data = null;
		if(jsonData != null){
			data = new JSONObject(jsonData);
			String title = data.getString("title");
			String description = data.getString("description");
			userd.add(Snippets.getASnippet(title, description));
			System.out.println(userd);
			return Response.status(200).entity(data.toString()).build();
		}
		
		return Response.status(400).entity("No Data".toString()).build();
	}
	
	@Path("editSnippet/{quoteId}")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response editSnippet(@PathParam("quoteId") final Long qId, final String jsonData) throws JSONException{
		int quoteId = 0;
		/*if(qId <= 0L){
			quoteId = 0;
		}else{*/
			quoteId = qId.intValue();
		//}
		
		Snippets s = userd.get(quoteId);
		userd.remove(quoteId);
		JSONObject object = new JSONObject(jsonData);
		
		s.setTitle(object.getString("title"));
		s.setDescription(object.getString("description"));
		s.setQuoteId(object.getLong("quoteId"));
		userd.add(quoteId, s);
		return Response.ok().status(200).entity(userd).build();
	}
	
	@Path("deleteSnippet/{quoteId}")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteSnippet(@PathParam("quoteId") final Long quoteId, final String jsonData){
		
		userd.remove(quoteId.intValue());
		
		return Response.ok().status(200).entity(userd).build();
	}
	
	/*@GET
	@Path("/service")
	@Produces(MediaType.APPLICATION_JSON)
	public Response sayPlainTextHello(@QueryParam("count") Long count) {
	
		String data = "Count is "+count;
		return Response.status(200).entity(data.toString()).build();
	}*/
}

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import java.util.stream.Collectors;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    Query query = new Query("Comment");

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    ArrayList<String> messages = new ArrayList<String>();
    for (Entity entity : results.asIterable()) {
      String comment = (String) entity.getProperty("content");

      messages.add(comment);
    }

    String json = convertToJson(messages);

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts an instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(ArrayList<String> messages) {
    String commaSeparatedMessage = messages.stream().
        map(msg -> String.format("{\"comment\": \"%s\"}", msg)).
        collect(Collectors.joining(", "));
    return "[" + commaSeparatedMessage + "]";
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String comment = getSubmitComment(request);

    Entity commentEntity = new Entity("Comment");
    commentEntity.setProperty("content", comment);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(commentEntity);
    
    // Redirect back to the HTML page.
    response.sendRedirect("/index.html");
  }

  /** Returns the choice entered by the player, or -1 if the choice was invalid. */
  private String getSubmitComment(HttpServletRequest request) {
    // Get the input from the form.
    String comment = request.getParameter("text-input");

    return comment;
  }
}

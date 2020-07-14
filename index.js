const ejs = require('ejs');
const mustache = require('mustache');
const fs = require('fs-extra');
const geojsonPromise = fs.readJson('./jizo_project.geojson');

//const ejs_template = '<%= title %><% if (typeof hoge == "undefined") { %>hoge<% } %>';
//const mus_template = '{{title}}{{^hoge}}hoge{{/hoge}}';
const ejs_template = `    <div class="poi">
        <h2><%= title %> (<%= address %>)</h2>
        <a href="<%= path %>" target="_blank"><img class="represent" src="<%= mid_thumbnail %>"></a><br>
        <% if (description) { %><b>記述:</b> <%= description %><br><% } %>
        <% if (note) { %><b>メモ:</b> <%= note %><br><% } %>
        <% if (lost) { %><b>現況:</b> 現存せず<br><% } %>
        <% if (need_action) { %><b>アクション要:</b> <%= need_action %><br><% } %>
        <% if (files.length > 1) { %>
        <b>その他の画像:</b><br>
        <div class="parent">
            <% files.map(function(file) { %>
            <% if (file.path != path) { %>
            <div class="child">
                <div><a href="<%= file.path %>" target="_blank"><img src="<%= file.small_thumbnail %>"></a></div>
            </div>
            <% } %>
            <% }) %>
        </div>
        <% } %>
    </div>`;
const mus_template = `    <div class="poi">
        <h2>{{title}} ({{address}})</h2>
        <a href="{{&path}}" target="_blank"><img class="represent" src="{{&mid_thumbnail}}}"></a><br>
        {{#description}}<b>記述:</b> {{description}}<br>{{/description}}
        {{#note}}<b>メモ:</b> {{note}}<br>{{/note}}
        {{#lost}}<b>現況:</b> 現存せず<br>{{/lost}}
        {{#need_action}}<b>アクション要:</b> {{need_action}}<br>{{/need_action}}
    </div>`;
geojsonPromise.then((geojson) => {
    geojson.features.forEach((feature) => {
        console.log(ejs.render(ejs_template, feature.properties));
        //console.log(mustache.render(mus_template, feature.properties));
    });
});


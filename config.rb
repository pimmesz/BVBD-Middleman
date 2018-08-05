activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :site_url, ""

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
  set :http_prefix, '/rudiment'
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.branch = 'master'
  deploy.deploy_method = :git
end

data.projects.each do |name, project|
  proxy "/projects/#{name}.html", "/projects/show.html", locals: { description: project.description, name: project.name, images: project.images }, ignore: true
end

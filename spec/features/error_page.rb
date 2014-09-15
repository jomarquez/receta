require 'rails_helper.rb'

feature "Viewing an error page", js: true do
  scenario "view page not found" do
    visit '/foo'
  
    expect(page).to have_content("Page not found.")
  end
end

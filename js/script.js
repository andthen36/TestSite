document.addEventListener('DOMContentLoaded', function() {
    var addContactBtn = document.getElementById('addContactBtn');
    
    addContactBtn.addEventListener('click', function() {
      if ('contacts' in navigator) {
        var contact = {
          name: 'Evan Meyer',
          email: 'evan@clecinc.net',
          phoneNumber: '81-3558236',
          // Add more contact fields as necessary
        };
        
        var contacts = [contact];
        
        navigator.contacts.save(contacts, function() {
          // Contact saved successfully
          alert('Contact added to your phone!');
        }, function(error) {
          // Contact save failed
          console.error('Error saving contact:', error);
        });
      } else {
        // The browser does not support the contacts API
        alert('Sorry, your device does not support adding contacts.');
      }
    });
  });
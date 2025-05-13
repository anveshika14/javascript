    const form = document.getElementById('webForm');
    
    const fields = {
      firstName: {
        regex: /^[a-zA-Z0-9]{3,16}$/,
        error: 'First name must be alphanumeric and contain 3 - 16 characters'
      },
      lastName: {
        regex: /^[a-zA-Z0-9]{3,16}$/,
        error: 'Last name must be alphanumeric and contain 3 - 16 characters'
      },
      email: {
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        error: 'Email must be a valid address, e.g. example@example.com'
      },
      password: {
        regex: /^[\w@_-]{6,20}$/,
        error: 'Password must be alphanumeric (@, _, and - are also allowed) and between 6 - 20 characters'
      },
      telephone: {
        regex: /^(\d{11}|\d{3}-\d{3}-\d{4})$/,
        error: 'A valid Telephone number (11 digits and 333-333-3334)'
      },
      bio: {
        regex: /^[a-z_\- ]{8,50}$/,
        error: 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters'
      }
    };

    function validateField(id) {
      const input = document.getElementById(id);
      const errorElem = document.getElementById(`${id}Error`);
      const { regex, error } = fields[id];

      if (regex.test(input.value.trim())) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        errorElem.textContent = '';
        return true;
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        errorElem.textContent = error;
        return false;
      }
    }

    Object.keys(fields).forEach(field => {
      document.getElementById(field).addEventListener('input', () => validateField(field));
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      Object.keys(fields).forEach(field => {
        if (!validateField(field)) isValid = false;
      });

      const submitBtn = document.getElementById('submitBtn');
      if (isValid) {
        submitBtn.classList.add('valid');
        alert('Form submitted successfully!');
      } else {
        submitBtn.classList.remove('valid');
        alert('Please correct the errors before submitting.');
      }
    });
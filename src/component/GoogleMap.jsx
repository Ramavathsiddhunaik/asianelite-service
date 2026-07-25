const GoogleMap = () => {
  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#1a1a1a'
      }}>Our Service Areas</h2>
      <p style={{
        color: '#666',
        marginBottom: '30px',
        fontSize: '1rem'
      }}>
        Serving Hyderabad, Secunderabad & Ranga Reddy District
      </p>
      <div style={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <iframe
          title="AsianElite Home Cleaning Service - Service Areas"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1585.6393192351857!2d78.58745745004033!3d17.232236654022174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbongloor%20gate!5e0!3m2!1sen!2sin!4v1785005202036!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div style={{
        marginTop: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        maxWidth: '900px',
        margin: '24px auto 0'
      }}>
        {[
          'Hyderabad', 'Secunderabad','Bongloor Gate', 'Hayathnagar', 'Pedda Amberpet',
          'Kuntloor', 'Nagole', 'Vanasthalipuram', 'Badangpet',
          'Balapur', 'Uppal', 'Boduppal', 'Medipalli',
          'Karmanghat', 'Meerpet', 'Nadergul', 'Malakpet'
        ].map((area) => (
          <span key={area} style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '0.85rem',
            color: '#444',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
          }}>
            📍 {area}
          </span>
        ))}
      </div>
    </section>
  );
};

export default GoogleMap;
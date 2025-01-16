// Network Element Information Database
const networkContent = {
    // Performing Rights Organizations (PROs)
    'performing-rights-organizations': {
        title: 'Performing Rights Organizations (PROs)',
        sections: {
            Summary: `
                <p>Performing Rights Organizations (PROs) are entities that help songwriters and publishers get paid for the public performance of their songs. They collect and distribute performance royalties on behalf of songwriters and music publishers.</p>
                <p>The main PROs in the United States are ASCAP, BMI, and SESAC. These organizations track when songs are played in public, collect the royalties, and distribute them to their members.</p>
            `,
            History: `
                <p>PROs emerged in the early 20th century as music became increasingly commercialized and public performances became more common. The American Society of Composers, Authors and Publishers (ASCAP) was founded in 1914 as the first PRO in the United States.</p>
                <p>Broadcast Music, Inc. (BMI) was established in 1939 as a competitor to ASCAP, and SESAC followed in 1930 to provide additional options for rights management.</p>
            `,
            Resources: `
                <p>Learn more about PROs through these resources:</p>
                <ul>
                    <li><a href="#" onclick="showModal('ascap-info', networkContent['ascap-info'])">ASCAP Overview</a></li>
                    <li><a href="#" onclick="showModal('bmi-info', networkContent['bmi-info'])">BMI Overview</a></li>
                    <li><a href="#" onclick="showModal('sesac-info', networkContent['sesac-info'])">SESAC Overview</a></li>
                </ul>
            `
        }
    },

    // Composer/Songwriter/Performer Agreement
    'composer-agreement': {
        title: 'Composer/Songwriter/Performer Agreements',
        sections: {
            Summary: `
                <p>These agreements establish the legal relationship between creators and various industry entities. They define rights, responsibilities, and compensation structures for musical works.</p>
                <p>These contracts are fundamental to the music industry, ensuring proper attribution and compensation for creative work.</p>
            `,
            'Sample Contract': `
                <p>Key components of a standard agreement include:</p>
                <ul>
                    <li>Rights assignment and licensing terms</li>
                    <li>Royalty rates and payment schedules</li>
                    <li>Credit and attribution requirements</li>
                    <li>Term and territory definitions</li>
                    <li>Termination clauses</li>
                </ul>
            `,
            History: `
                <p>The evolution of these agreements reflects the changing landscape of music creation and distribution, from sheet music to streaming platforms.</p>
            `,
            Resources: `
                <p>Additional resources and guides:</p>
                <ul>
                    <li><a href="#" onclick="showModal('royalty-structures', networkContent['royalty-structures'])">Understanding Royalty Structures</a></li>
                    <li><a href="#" onclick="showModal('contract-terms', networkContent['contract-terms'])">Common Contract Terms</a></li>
                </ul>
            `
        }
    },

    // Example Connection
    'pro-composer-connection': {
        title: 'Connection Between PROs and Composers',
        sections: {
            Summary: `
                <p>This connection represents the fundamental relationship between Performing Rights Organizations (PROs) and music creators. PROs collect and distribute performance royalties to composers, songwriters, and publishers.</p>
                <p>The relationship is typically established through membership agreements and governed by specific terms and conditions.</p>
            `,
            Resources: `
                <p>Learn more about this relationship:</p>
                <ul>
                    <li><a href="#" onclick="showModal('membership-benefits', networkContent['membership-benefits'])">PRO Membership Benefits</a></li>
                    <li><a href="#" onclick="showModal('royalty-collection', networkContent['royalty-collection'])">Royalty Collection Process</a></li>
                </ul>
            `
        }
    }
};

// Helper function to generate content HTML from sections
function generateContent(sections) {
    return Object.entries(sections).map(([name, content]) => `
        <div class="modal-section${name === 'Summary' ? ' active' : ''}" data-section="${name}">
            ${content}
        </div>
    `).join('');
}

// Update each content object to include generated HTML
Object.values(networkContent).forEach(item => {
    if (item.sections) {
        item.content = generateContent(item.sections);
    }
});

// Export the content object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = networkContent;
} 
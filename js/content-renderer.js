// Content rendering functions
const contentRenderer = {
    renderSummary(data) {
        return `
            <div class="content-section">
                ${data.overview ? `
                    <div class="section-block overview-block">
                        <p class="overview">${data.overview}</p>
                    </div>
                ` : ''}

                ${data.role ? `
                    <div class="section-block role-block">
                        <h4>Role</h4>
                        <p>${data.role}</p>
                    </div>
                ` : ''}

                ${data.key_responsibilities ? `
                    <div class="section-block responsibilities-block">
                        <h4>Key Responsibilities</h4>
                        <ul class="responsibility-list">
                            ${data.key_responsibilities.map(resp => `
                                <li>${resp}</li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}

                ${data.major_organizations ? `
                    <div class="section-block organizations-block">
                        <h4>Major Organizations</h4>
                        <div class="org-grid">
                            ${data.major_organizations.map(org => `
                                <div class="org-card">
                                    <h5>${org.name}</h5>
                                    <p>${org.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    },

    renderHistory(data) {
        return `
            <div class="content-section">
                ${data.timeline ? `
                    <div class="section-block timeline-block">
                        <h4>Timeline</h4>
                        <div class="timeline">
                            ${data.timeline.map(item => `
                                <div class="timeline-item">
                                    <div class="timeline-year">${item.year}</div>
                                    <div class="timeline-content">
                                        <h5>${item.event}</h5>
                                        <p>${item.significance}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${data.evolution ? `
                    <div class="section-block evolution-block">
                        <h4>Evolution</h4>
                        <p>${data.evolution}</p>
                    </div>
                ` : ''}

                ${data.modern_context ? `
                    <div class="section-block context-block">
                        <h4>Modern Context</h4>
                        <p>${data.modern_context}</p>
                    </div>
                ` : ''}
            </div>
        `;
    },

    renderSampleContract(data) {
        return `
            <div class="content-section">
                ${data.introduction ? `
                    <div class="section-block intro-block">
                        <p>${data.introduction}</p>
                    </div>
                ` : ''}

                ${data.clauses ? `
                    <div class="section-block clauses-block">
                        ${data.clauses.map(clause => `
                            <div class="contract-clause">
                                <h4>${clause.title}</h4>
                                <div class="clause-content">${clause.content}</div>
                                ${clause.explanation ? `
                                    <div class="clause-explanation">
                                        <i>Explanation:</i> ${clause.explanation}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${data.key_terms ? `
                    <div class="section-block terms-block">
                        <h4>Key Terms</h4>
                        ${data.key_terms.map(term => `
                            <div class="key-term">
                                <span class="term">${term.term}:</span>
                                <span class="definition">${term.definition}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    },

    renderResources(data) {
        return `
            <div class="content-section">
                ${data.major_organizations ? `
                    <div class="section-block resources-block">
                        <h4>Organizations</h4>
                        <div class="resource-links">
                            ${data.major_organizations.map(org => `
                                <div class="resource-item">
                                    <h5>${org.name}</h5>
                                    <p>${org.description}</p>
                                    ${org.website ? `<a href="${org.website}" target="_blank">Visit Website</a>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${data.related_elements ? `
                    <div class="section-block related-block">
                        <h4>Related Topics</h4>
                        <div class="related-items">
                            ${data.related_elements.map(item => `
                                <div class="related-item">
                                    <a href="#" onclick="showModal('${item.id}', networkContent['${item.id}'])">
                                        ${item.title}
                                    </a>
                                    <p>${item.relationship}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${data.external_links ? `
                    <div class="section-block external-block">
                        <h4>External Resources</h4>
                        <div class="external-links">
                            ${data.external_links.map(link => `
                                <div class="external-item">
                                    <a href="${link.url}" target="_blank">${link.title}</a>
                                    <p>${link.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
};

// Helper function to render content based on section type
function renderContent(section, data) {
    switch(section) {
        case 'Summary':
            return contentRenderer.renderSummary(data);
        case 'History':
            return contentRenderer.renderHistory(data);
        case 'Sample Contract':
            return contentRenderer.renderSampleContract(data);
        case 'Resources':
            return contentRenderer.renderResources(data);
        default:
            return `<p>${data}</p>`;
    }
} 
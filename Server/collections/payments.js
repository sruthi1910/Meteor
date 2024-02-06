import { SimpleSchema } from 'meteor/aldeia:simple-schema';

export const Payments = new Mongo.Collection('payments');

const PaymentSchema = new SimpleSchema({
  _id: { type: String, optional: true },
  loanId: { type: String, required: true },
  borrowerId: { type: String, optional: true }, // Redundant if loans reference borrowers
  amount: { type: Number, required: true, min: 0 },
  date: { type: Date, required: true },
  method: { type: String, required: true },
  status: { type: String, required: true, allowedValues: ['Pending', 'Processed', 'Failed'] },
  
});

PaymentSchema.index({ loanId: 1 }); // Optimize queries based on loan ID

Payments.attachSchema(PaymentSchema);

// Optional: Define relationships
if (typeof Loans === 'function') {
  Loans.schema.extend({
    payments: { type: Array, optional: true, blackbox: true },
  });
}
